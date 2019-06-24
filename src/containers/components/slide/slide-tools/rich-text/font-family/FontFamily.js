import PropTypes from "prop-types";
import React, { Component } from "react";
// import { CodeBlock as CodeBlockStyled } from "./CodeBlock.styles";

class FontFamily extends Component {
    render() {
        const {
            children,
            mark: { data }
        } = this.props;

        return (
            <span style={{ fontFamily: data.get("fontFamily") || "arial" }}>
                {children}
            </span>
        );
    }
}

FontFamily.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    mark: PropTypes.object.isRequired
};

export default FontFamily;
