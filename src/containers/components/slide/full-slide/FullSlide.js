import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
// import slideTools from "../slide-tools/slide-tools";
import TextInput from "../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    render() {
        const {
            store: { activeSlide }
        } = this.props;

        return (
            <div>
                {activeSlide &&
                    activeSlide.content.text.map((textInfo, index) => {
                        return (
                            <TextInput
                                key={index}
                                fullSlide
                                editorData={textInfo.editor}
                            />
                        );
                    })}
            </div>
        );
    }
}

FullSlide.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(FullSlide));
