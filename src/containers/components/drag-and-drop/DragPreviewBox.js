import PropTypes from "prop-types";
import React, { Component } from "react";
import ItemTypes from "./ItemTypes";
import { BoxWrapper, BoxItem } from "./DragPreviewBox.styles";

class DragPreviewBox extends Component {
    render() {
        const { boxContent } = this.props;

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
            </BoxWrapper>
        );
    }
}

DragPreviewBox.propTypes = {
    boxContent: PropTypes.object.isRequired
};

export default DragPreviewBox;
