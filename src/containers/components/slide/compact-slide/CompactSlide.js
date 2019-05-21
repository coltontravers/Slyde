import React, { Component } from "react";
import PropTypes from "prop-types";
import CompactSlideView from "./compact-slide-view/CompactSlideView";
import { Slide } from "./CompactSlide.styles";

class CompactSlide extends Component {
    render() {
        const { slideNumber } = this.props;

        return (
            <Slide>
                <CompactSlideView slideNumber={slideNumber} />
            </Slide>
        );
    }
}

CompactSlide.propTypes = {
    slideNumber: PropTypes.number.isRequired
};

export default CompactSlide;
