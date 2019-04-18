import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import FullSlide from "./full-slide/FullSlide";
import SlidePreview from "./slide-preview/SlidePreview";

class Slide extends Component {
    render() {
        const {
            full,
            store: { slides }
        } = this.props;
        if (full) {
            return <FullSlide slides={slides} />;
        }
        return <SlidePreview slides={slides} />;
    }
}

Slide.defaultProps = {
    full: false
};

Slide.propTypes = {
    full: PropTypes.bool,
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(Slide));
