import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Container from "./Container";
import CustomDragLayer from "./CustomDragLayer";
import { DragNDropWrapper } from "./DragAndDrop.styles";

class DragAroundCustomDragLayer extends Component {
    render() {
        const { slideBoxes } = this.props;

        return (
            <DragNDropWrapper>
                <DragDropContextProvider backend={HTML5Backend}>
                    <Container slideBoxes={slideBoxes} />
                    <CustomDragLayer slideBoxes={slideBoxes} />
                </DragDropContextProvider>
            </DragNDropWrapper>
            // <div />
        );
    }
}

DragAroundCustomDragLayer.propTypes = {
    slideBoxes: PropTypes.array.isRequired
};

// export default observer(DragAroundCustomDragLayer);
export default DragAroundCustomDragLayer;
