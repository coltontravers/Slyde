import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import FullSlide from "./full-slide/FullSlide";
import CompactSlide from "./compact-slide/CompactSlide";

class Slide extends Component {
    render() {
        const { full, slideNumber } = this.props;

        if (full) {
            return <FullSlide />;
        }

        return <CompactSlide slideNumber={slideNumber} />;
    }
}

Slide.defaultProps = {
    full: false,
    slideNumber: null
};

Slide.propTypes = {
    full: PropTypes.bool,
    slideNumber: PropTypes.number
};

export default inject("store")(observer(Slide));
