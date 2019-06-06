import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Slide from "../../components/slide/Slide";
import SlidePreviewBar from "../../components/slide-preview/slide-preview-bar/SlidePreviewBar";
import {
    SlideViewWrapper,
    SlidePreviewWrapper,
    Slides,
    MainSlide,
    MainSlideWrapper
} from "./SlideView.styles";
import TextToolbar from "../../components/slide/slide-tools/text-toolbar/TextToolbar";
import Toolbar from "../../components/toolbar/Toolbar";

class SlideView extends Component {
    componentWillMount() {
        const {
            store: { changePage, slides },
            match: {
                params: { id = slides[0].id }
            }
        } = this.props;

        changePage(id);
    }

    render() {
        const {
            store: { activePage, slides }
        } = this.props;

        const editorValue = slides[Number(activePage) - 1].content[0].editor;

        return (
            <SlideViewWrapper>
                <div>
                    <Toolbar />
                </div>
                <Slides>
                    {/* <SlidePreviewBar>
                        <SlidePreviewWrapper>
                            <SlidePreviewBar />
                        </SlidePreviewWrapper>
                    </SlidePreviewBar> */}

                    <MainSlideWrapper>
                        <TextToolbar editorValue={editorValue} />
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
