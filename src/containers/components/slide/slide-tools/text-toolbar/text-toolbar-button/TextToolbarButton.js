import PropTypes from "prop-types";
import React, { Component } from "react";
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
    active: false,
    children: "",
    onMouseDown: () => {}
};

TextToolbarButton.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    onMouseDown: PropTypes.func
};

export default TextToolbarButton;
