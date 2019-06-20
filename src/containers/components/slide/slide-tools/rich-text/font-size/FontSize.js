import PropTypes from "prop-types";
import React, { Component } from "react";
// import { CodeBlock as CodeBlockStyled } from "./CodeBlock.styles";

class FontSize extends Component {
    render() {
        const {
            children,
            mark: { data }
        } = this.props;

        return (
            <span style={{ fontSize: parseInt(data.get("fontSize"), 10) }}>
                {children}
            </span>
        );
    }
}

FontSize.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    mark: PropTypes.object.isRequired
};

export default FontSize;
