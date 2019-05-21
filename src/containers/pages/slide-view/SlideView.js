import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Value } from "slate";
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
    componentWillMount() {
        const {
            store: { changePage },
            match: {
                params: { id }
            }
        } = this.props;

        changePage(id);
    }

    render() {
        const { store } = this.props;

        return (
            <SlideViewWrapper>
                <div id="test">
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
                            value={Value.create(
                                store.slides[Number(store.activePage) - 1]
                                    .content.text[0].editor
                            )}
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
    store: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default inject("store")(observer(SlideView));
