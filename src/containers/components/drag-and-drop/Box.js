import PropTypes from "prop-types";
import React, { Component } from "react";
import ItemTypes from "./ItemTypes";
import { BoxWrapper } from "./Box.styles";

class Box extends Component {
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
                <ComponentName {...component.props} />
            </BoxWrapper>
        );
    }
}

Box.propTypes = {
    boxContent: PropTypes.object.isRequired
};

export default Box;
