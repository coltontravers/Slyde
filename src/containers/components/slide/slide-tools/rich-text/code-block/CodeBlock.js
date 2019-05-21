import React, { Component } from "react";
import PropTypes from "prop-types";
import { CodeBlock as CodeBlockStyled } from "./CodeBlock.styles";

class CodeBlock extends Component {
    render() {
        return <CodeBlockStyled>{this.props.children}</CodeBlockStyled>;
    }
}

CodeBlock.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default CodeBlock;
