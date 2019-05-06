import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

class CompactSlide extends Component {
    render() {
        const { store, slideIndex } = this.props;
        const slide = store.slides[slideIndex];

        return <div>Current Slide: {slide.content.text}</div>;
    }
}

CompactSlide.propTypes = {
    store: PropTypes.object.isRequired,
    slideIndex: PropTypes.number.isRequired
};

export default inject("store")(observer(CompactSlide));
