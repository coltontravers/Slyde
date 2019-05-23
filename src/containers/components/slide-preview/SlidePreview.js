import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Slide from "../slide/Slide";
import { Slides, SlideWrapper } from "./SlidePreview.styles";

class SlidePreview extends Component {
    slideChange(id) {
        const { changePage } = this.props.store;
        changePage(id);
        this.props.history.push(`/slide-view/${id}`);
    }

    render() {
        const { slides, activePage } = this.props.store;

        return (
            <Slides>
                {slides.map((slide, index) => {
                    const slideIndex = slides.findIndex(slideInfo => {
                        return slideInfo.id === activePage;
                    });

                    const isActive = slideIndex === index;

                    return (
                        <SlideWrapper
                            key={index}
                            active={isActive}
                            onClick={() => this.slideChange(slides[index].id)}
                        >
                            <Slide slideNumber={index} />
                        </SlideWrapper>
                    );
                })}
            </Slides>
        );
    }
}

SlidePreview.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(inject("store")(observer(SlidePreview)));
