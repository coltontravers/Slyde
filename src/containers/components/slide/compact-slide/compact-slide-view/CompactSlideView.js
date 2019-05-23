// This file needs to have reactive functionality added to it.
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Html from "slate-html-serializer";

const elementTypes = {
    paragraph: "p"
};

/* eslint-disable */
const rules = [
    {
        serialize(obj, children, el) {
            if (obj.object == "mark") {
                const Tag = elementTypes[obj.type];

                if (Tag) {
                    return <Tag>{children}</Tag>;
                }
            } else if (obj.object == "block") {
                const Tag = elementTypes[obj.type];

                if (Tag) {
                    return <Tag>{children}</Tag>;
                }
            }
        }
    }
];

const serializer = new Html({ rules });

class CompactSlideView extends Component {
    state = {
        text: []
    };

    componentDidMount() {
        const slide = this.props.store.slides[this.props.slideNumber];

        this.setState({
            text: slide.content.text.map((textInfo, index) => {
                return (
                    <div key={index}>
                        {serializer.serialize(textInfo.editor)}
                    </div>
                );
            })
        });
    }

    render() {
        const { text } = this.state;

        return (
            <div>
                {text.map((Text, index) => {
                    return (
                        <div
                            key={index}
                            // Replace this with a better solution.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: Text.props.children
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}

CompactSlideView.propTypes = {
    store: PropTypes.object.isRequired,
    slideNumber: PropTypes.number.isRequired
};

export default inject("store")(observer(CompactSlideView));
