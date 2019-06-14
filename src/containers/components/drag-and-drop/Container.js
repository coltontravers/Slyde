import { inject } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
import DraggableBox from "./DraggableBox";
import snapToGrid from "./snapToGrid";

class Container extends Component {
    moveBox(contentId, left, top) {
        const {
            store: { updateSlideData, activePage },
            slideBoxes
        } = this.props;

        const slideId = activePage - 1;

        const slidesData = slideBoxes;

        slidesData[slideId] = {
            ...slidesData[slideId],
            left,
            top
        };

        updateSlideData(contentId, slidesData);
    }

    renderBox(item, index, connectDropTarget) {
        return (
            <DraggableBox
                key={index}
                id={index}
                boxContent={item}
                connectDropTarget={connectDropTarget}
            />
        );
    }

    render() {
        const { connectDropTarget, slideBoxes } = this.props;

        return connectDropTarget(
            <div style={{ height: "100%", width: "100%" }}>
                {slideBoxes.map((item, index) =>
                    this.renderBox(item, index, connectDropTarget)
                )}
            </div>
        );
    }
}

Container.propTypes = {
    store: PropTypes.object.isRequired,
    slideBoxes: PropTypes.array.isRequired,
    connectDropTarget: PropTypes.func.isRequired
};

export default inject("store")(
    DropTarget(
        ItemTypes.BOX,
        {
            drop(props, monitor, component) {
                if (!component) {
                    return;
                }
                const delta = monitor.getDifferenceFromInitialOffset();
                const item = monitor.getItem();
                let left = Math.round(item.left + delta.x);
                let top = Math.round(item.top + delta.y);
                if (props.snapToGrid) {
                    [left, top] = snapToGrid(left, top);
                }
                console.log("THE MOVE BOX COMPONENT:", item);
                component.moveBox(item.id, left, top);
            }
        },
        connect => ({
            connectDropTarget: connect.dropTarget()
        })
    )(Container)
);
