import React, { Component } from "react";
import PropTypes from "prop-types";
import { BlockQuote as BlockQuoteStyled } from "./BlockQuote.styles";

class BlockQuote extends Component {
    render() {
        return <BlockQuoteStyled>{this.props.children}</BlockQuoteStyled>;
    }
}

BlockQuote.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default BlockQuote;
