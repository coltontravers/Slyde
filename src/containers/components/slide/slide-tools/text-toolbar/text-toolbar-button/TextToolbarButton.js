import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./TextToolbarButton.styles";

class TextToolbarButton extends Component {
    render() {
        const { onMouseDown, active } = this.props;

        return (
            <Button onMouseDown={onMouseDown} active={active}>
                {this.props.children}
            </Button>
        );
    }
}

TextToolbarButton.defaultProps = {
    onMouseDown: () => {},
    children: ""
};

TextToolbarButton.propTypes = {
    onMouseDown: PropTypes.func,
    children: PropTypes.any,
    active: PropTypes.bool.isRequired
};

export default TextToolbarButton;
