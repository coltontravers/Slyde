import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Slide from "../../components/slide/Slide";
import SlidePreview from "../../components/slide-preview/SlidePreview";
import Toolbar from "../../components/toolbar/toolbar";
import TextToolbar from "../../components/slide/slide-tools/text-toolbar/TextToolbar";
import {
    SlideViewWrapper,
    SlidePreviewBar,
    SlidePreviewWrapper,
    Slides,
    MainSlide,
    MainSlideWrapper
} from "./SlideView.styles";

class SlideView extends Component {
    render() {
        return (
            <SlideViewWrapper>
                <div>
                    <Toolbar />
                </div>
                <Slides>
                    <SlidePreviewBar>
                        <SlidePreviewWrapper>
                            <SlidePreview />
                        </SlidePreviewWrapper>
                    </SlidePreviewBar>

                    <MainSlideWrapper>
                        <TextToolbar
                            value={this.props.store.initialEditorData}
                            editor={this.props.store.activeEditor}
                        />
                        <MainSlide>
                            <Slide full />
                        </MainSlide>
                    </MainSlideWrapper>
                </Slides>
            </SlideViewWrapper>
        );
    }
}

export default inject("store")(observer(SlideView));
