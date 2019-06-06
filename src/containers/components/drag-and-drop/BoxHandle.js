import PropTypes from "prop-types";
import React, { Component } from "react";

class BoxHandle extends Component {
    render() {
        const { connectDragSource } = this.props;

        // I'd like to implement a handle border instead.
        // const styles = {
        //     top: `${boxContent.top}px`,
        //     left: `${boxContent.left}px`,
        //     position: "absolute",
        //     background: "grey",
        //     height: "100%",
        //     width: "100%",
        //     zIndex: -1,
        //     cursor: "grab",
        //     border: "dotted"
        // };

        const styles = {
            top: `-30px`,
            left: `-50px`,
            position: "absolute",
            background: "grey",
            cursor: "move"
        };

        if (connectDragSource) {
            return connectDragSource(<div style={styles}>DRAG</div>);
        }

        return <div style={styles}>DRAG</div>;
    }
}

BoxHandle.defaultProps = {
    connectDragSource: null
};

BoxHandle.propTypes = {
    // boxContent: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func
};

export default BoxHandle;
