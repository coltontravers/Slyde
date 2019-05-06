import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Slide from "../slide/Slide";
import { Slides, SlideWrapper } from "./SlidePreview.styles";

class SlidePreview extends Component {
    render() {
        const { slides } = this.props.store;
        return (
            <Slides>
                <Link to="/slide-view/123">Test Slide </Link>
                {slides.map((slide, index) => {
                    return (
                        <SlideWrapper key={index}>
                            <Slide />
                        </SlideWrapper>
                    );
                })}
            </Slides>
        );
    }
}

SlidePreview.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(SlidePreview));
