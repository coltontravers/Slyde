import PropTypes from "prop-types";
import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import ItemTypes from "./ItemTypes";
import Box from "./Box";
import { BoxWrapper, BoxDraggable } from "./DraggableBox.styles";

function getStyles(props) {
    const { left, top, isDragging } = props;
    return {
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : "",
        background: "silver"
    };
}
class DraggableBox extends Component {
    componentDidMount() {
        const { connectDragPreview } = this.props;
        if (connectDragPreview) {
            // Use empty image as a drag preview so browsers don't draw it
            // and we can draw whatever we want on the custom drag layer instead.
            connectDragPreview(getEmptyImage(), {
                // IE fallback: specify that we'd rather screenshot the node
                // when it already knows it's being dragged so we can hide it with CSS.
                captureDraggingState: true
            });
        }
    }

    render() {
        const { boxContent, connectDragSource, isDragging } = this.props;
        return (
            <div style={getStyles(this.props)}>
                <Box
                    boxContent={boxContent}
                    connectDragSource={connectDragSource}
                    isDragging={isDragging}
                />
            </div>
        );
    }
}

DraggableBox.propTypes = {
    boxContent: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(
    ItemTypes.BOX,
    {
        beginDrag(props) {
            return { ...props.boxContent };
        }
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    })
)(DraggableBox);
