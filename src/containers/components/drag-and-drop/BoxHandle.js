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
            top: `-15px`,
            left: `0px`,
            position: "absolute",
            background: "whitesmoke",
            boxShadow: "0px 0px 2px 1px #dadada",
            borderRadius: "50px 50px 0 0",
            height: "10px",
            width: "100%",
            cursor: "move"
        };

        if (connectDragSource) {
            return connectDragSource(<div style={styles} />);
        }

        return <div style={styles} />;
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
