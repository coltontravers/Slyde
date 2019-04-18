import React, { Component } from "react";
import PropTypes from "prop-types";
import Slide from "../../components/slide/Slide";
import SlidePreview from "../../components/slide-preview/SlidePreview";
import Toolbar from "../../components/toolbar/toolbar";
import { SlideViewWrapper, Slides, MainSlide } from "./SlideView.styles";

class SlideView extends Component {
    render() {
        console.log("SLIDE VIEW PROPS:", this.props);
        return (
            <SlideViewWrapper>
                <div>
                    <Toolbar />
                </div>
                <Slides>
                    <SlidePreview />
                    <MainSlide>
                        <Slide full />
                    </MainSlide>
                </Slides>
            </SlideViewWrapper>
        );
    }
}

export default SlideView;
