import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./TextToolbarButton.styles";

class TextToolbarButton extends Component {
    render() {
        const { onMouseDown } = this.props;
        return <Button onMouseDown={onMouseDown}>{this.props.children}</Button>;
    }
}

TextToolbarButton.defaultProps = {
    onMouseDown: () => {},
    children: ""
};

TextToolbarButton.propTypes = {
    onMouseDown: PropTypes.func,
    children: PropTypes.any
};

export default TextToolbarButton;
