import PropTypes from "prop-types";
import React, { Component } from "react";
import ItemTypes from "./ItemTypes";
import BoxHandle from "./BoxHandle";
import { BoxWrapper, BoxItem } from "./Box.styles";

class Box extends Component {
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
            <BoxWrapper {...this.props}>
                <BoxItem>
                    <ComponentName {...component.props} />
                </BoxItem>
                <BoxHandle
                    boxContent={boxContent}
                    connectDragSource={connectDragSource}
                />
            </BoxWrapper>
        );
    }
}

Box.defaultProps = {
    connectDragSource: null
};

Box.propTypes = {
    boxContent: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func
};

export default Box;
