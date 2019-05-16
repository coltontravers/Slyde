import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import FullSlide from "./full-slide/FullSlide";
import CompactSlide from "./compact-slide/CompactSlide";

class Slide extends Component {
    render() {
        const { full } = this.props;

        if (full) {
            return <FullSlide />;
        }

        return <CompactSlide />;
    }
}

Slide.defaultProps = {
    full: false
};

Slide.propTypes = {
    full: PropTypes.bool
};

export default inject("store")(observer(Slide));
