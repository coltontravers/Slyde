import React, { Component } from "react";
import PropTypes from "prop-types";

class SlidePreview extends Component {
    render() {
        const { slides } = this.props;
        return <div>Slide preview</div>;
    }
}

SlidePreview.propTypes = {
    slides: PropTypes.array.isRequired
};

export default SlidePreview;
