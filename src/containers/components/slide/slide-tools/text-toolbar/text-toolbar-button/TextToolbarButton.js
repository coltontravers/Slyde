import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./TextToolbarButton.styles";

class TextToolbarButton extends Component {
    render() {
        const { onMouseDown, isActive } = this.props;
        return (
            <Button onMouseDown={onMouseDown} isActive={isActive}>
                {this.props.children}
            </Button>
        );
    }
}

TextToolbarButton.defaultProps = {
    onMouseDown: () => {},
    isActive: false,
    children: ""
};

TextToolbarButton.propTypes = {
    onMouseDown: PropTypes.func,
    isActive: PropTypes.bool,
    children: PropTypes.any
};

export default TextToolbarButton;
