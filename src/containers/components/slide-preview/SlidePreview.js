import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Slide from "../slide/Slide";
import { Slides } from "./SlidePreview.styles";

class SlidePreview extends Component {
    render() {
        const { slides } = this.props.store;
        return (
            <Slides>
                {slides.map((slide, index) => {
                    return <Slide key={index} />;
                })}
            </Slides>
        );
    }
}

SlidePreview.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(SlidePreview));
