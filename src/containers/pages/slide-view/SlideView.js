import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Slide from "../../components/slide/Slide";
import SlidePreviewBar from "../../components/slide-preview/slide-preview-bar/SlidePreviewBar";
import Toolbar from "../../components/toolbar/Toolbar";
import TextToolbar from "../../components/slide/slide-tools/text-toolbar/TextToolbar";
import {
    SlideViewWrapper,
    SlidePreviewWrapper,
    Slides,
    MainSlide,
    MainSlideWrapper
} from "./SlideView.styles";

class SlideView extends Component {
    render() {
        const { store } = this.props;
        return (
            <SlideViewWrapper>
                <div>
                    <Toolbar />
                </div>
                <Slides>
                    <SlidePreviewBar>
                        <SlidePreviewWrapper>
                            <SlidePreviewBar />
                        </SlidePreviewWrapper>
                    </SlidePreviewBar>

                    <MainSlideWrapper>
                        <TextToolbar
                            value={store.initialEditorData}
                            activeEditor={store.activeEditor}
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

SlideView.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(SlideView));
