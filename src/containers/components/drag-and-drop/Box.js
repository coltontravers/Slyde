import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Resizable } from "re-resizable";
import ItemTypes from "./ItemTypes";
import BoxHandle from "./BoxHandle";
import { BoxWrapper, BoxItem } from "./Box.styles";

class Box extends Component {
    state = {
        resizing: false,
        hovering: false
    };

    resizedBox(dimensions) {
        const {
            store: { updateSlideData, activePage, activeSlide },
            boxContent: { id }
        } = this.props;

        const slideId = activePage - 1;
        const slidesData = activeSlide.content;

        slidesData[slideId] = {
            ...slidesData[slideId],
            ...dimensions
        };

        updateSlideData(id, slidesData);
    }

    render() {
        const { boxContent, connectDragSource } = this.props;

        const props = {};

        const SlideComponent = ItemTypes[boxContent.contentType];

        if (boxContent.contentType === "textEditor") {
            props.editorValue = boxContent.editor;
            props.fullSlide = true;
        }

        const component = {
            component: SlideComponent,
            props
        };

        const ComponentName = component.component;

        return (
            <BoxWrapper
                {...this.props}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
            >
                <Resizable
                    defaultSize={{
                        width: boxContent.width,
                        height: boxContent.height
                    }}
                    onResizeStart={() => {
                        this.setState({
                            resizing: true
                        });
                    }}
                    onResizeStop={(event, direction, element) => {
                        this.resizedBox({
                            height: element.clientHeight,
                            width: element.clientWidth
                        });
                        this.setState({
                            resizing: false
                        });
                    }}
                >
                    <BoxItem {...this.state}>
                        <ComponentName {...component.props} />
                    </BoxItem>
                    <BoxHandle
                        hovering={this.state.hovering}
                        connectDragSource={connectDragSource}
                    />
                </Resizable>
            </BoxWrapper>
        );
    }
}

Box.defaultProps = {
    connectDragSource: null
};

Box.propTypes = {
    boxContent: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func
};

export default inject("store")(observer(Box));
