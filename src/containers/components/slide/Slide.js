import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import FullSlide from "./full-slide/FullSlide";
import SlidePreview from "./slide-preview/SlidePreview";

class Slide extends Component {
    render() {
        const { full, slideIndex } = this.props;
        if (full) {
            return <FullSlide slideIndex={slideIndex} />;
        }
        return <SlidePreview slideIndex={slideIndex} />;
    }
}

Slide.defaultProps = {
    slideIndex: 0,
    full: false
};

Slide.propTypes = {
    slideIndex: PropTypes.number,
    full: PropTypes.bool
};

export default inject("store")(observer(Slide));
