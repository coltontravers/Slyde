import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import CompactSlideView from "./compact-slide-view/CompactSlideView";
import { Slide } from "./CompactSlide.styles";

class CompactSlide extends Component {
    render() {
        const {
            store: { slides },
            slideNumber
        } = this.props;

        return (
            <Slide>
                {/* <p>test</p> */}
                <CompactSlideView activeSlide={slides[slideNumber]} />
            </Slide>
        );
    }
}

CompactSlide.propTypes = {
    store: PropTypes.object.isRequired,
    slideNumber: PropTypes.number.isRequired
};

export default inject("store")(observer(CompactSlide));
