import PropTypes from "prop-types";
import React, { Component } from "react";

class BoxHandle extends Component {
    render() {
        const { hovering, connectDragSource } = this.props;

        const styles = {
            top: "-15%",
            left: `-1%`,
            position: "absolute",
            cursor: "move",
            zIndex: "-1",
            height: "130%",
            width: "102%",
            border: "2px solid rgb(218, 218, 218)",
            boxShadow: "0px 0px 10px -3px #b5b5b5",
            opacity: hovering ? 1 : 0
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
    hovering: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func
};

export default BoxHandle;
