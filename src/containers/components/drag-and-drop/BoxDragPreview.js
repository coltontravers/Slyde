import PropTypes from "prop-types";
import React, { Component } from "react";
import DragPreviewBox from "./DragPreviewBox";

const styles = {
    display: "inline-block"
};

class BoxDragPreview extends Component {
    state = {
        tickTock: false
    };

    render() {
        const { boxContent } = this.props;
        const { tickTock } = this.state;

        // eslint-disable-next-line no-unused-expressions
        () => {
            const interval = setInterval(() => {
                this.setState(!tickTock);
            }, 500);
            return () => clearInterval(interval);
        };

        return (
            <div style={styles}>
                <DragPreviewBox boxContent={boxContent} />
            </div>
        );
    }
}

BoxDragPreview.propTypes = {
    boxContent: PropTypes.object.isRequired
};

export default BoxDragPreview;
