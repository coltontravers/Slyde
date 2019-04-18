import React, { Component } from "react";
import Slide from "../slide/Slide";
import { Slides } from "./SlidePreview.styles";

class SlidePreview extends Component {
    render() {
        const slides = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ];
        return (
            <Slides>
                {slides.map((slide, index) => {
                    return <Slide key={index} />;
                })}
            </Slides>
        );
    }
}

export default SlidePreview;
