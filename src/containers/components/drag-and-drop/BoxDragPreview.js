import PropTypes from "prop-types";
import React, { Component } from "react";
import Box from "./Box";

const styles = {
    // display: "inline-block",
    // transform: "rotate(-7deg)",
    // WebkitTransform: "rotate(-7deg)"
};

class BoxDragPreview extends Component {
    state = {
        tickTock: false
    };

    render() {
        const { tickTock } = this.state;

        () => {
            const interval = setInterval(() => {
                this.setState(!tickTock);
            }, 500);
            return () => clearInterval(interval);
        };

        return (
            <div>
                <Box style={styles} boxContent={this.props.boxContent} />
            </div>
        );
    }
}

BoxDragPreview.propTypes = {
    boxContent: PropTypes.object.isRequired
};

export default BoxDragPreview;
