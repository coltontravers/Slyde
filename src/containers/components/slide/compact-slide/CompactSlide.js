import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

class CompactSlide extends Component {
    render() {
        const { store: slides, slideIndex } = this.props;
        const slide = slides[slideIndex];
        return <div>Current Slide: {slide}</div>;
    }
}

CompactSlide.propTypes = {
    store: PropTypes.object.isRequired,
    slideIndex: PropTypes.number.isRequired
};

export default inject("store")(observer(CompactSlide));
