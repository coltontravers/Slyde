import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import SlidePreview from "../SlidePreview";
import { PreviewBar } from "./SlidePreviewBar.styles";

class SlidePreviewBar extends Component {
    render() {
        return (
            <PreviewBar>
                <SlidePreview />
            </PreviewBar>
        );
    }
}

export default inject("store")(observer(SlidePreviewBar));
