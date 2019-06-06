import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { TextInputWrapper } from "./FullSlide.styles";
import DragNDrop from "../../drag-and-drop/DragAndDrop";

class FullSlide extends Component {
    render() {
        const {
            store: { activeSlide }
        } = this.props;

        return (
            <TextInputWrapper>
                <DragNDrop slideBoxes={activeSlide.content} />
            </TextInputWrapper>
        );
    }
}

FullSlide.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(FullSlide));
