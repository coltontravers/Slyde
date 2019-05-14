import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
// import slideTools from "../slide-tools/slide-tools";
import TextInput from "../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    // state = {
    //     slide: null
    // };

    // componentDidMount() {
    //     const {
    //         store: { slides, activePage }
    //     } = this.props;
    //     if (activePage) {
    //         const slide = slides.find(slideInfo => {
    //             return slideInfo.id === activePage;
    //         });

    //         this.setState({ slide });
    //     }
    // }

    // getSlideData() {
    //     const {
    //         store: { slides, activePage }
    //     } = this.props;
    //     if (activePage) {
    //         const slide = slides.find(slideInfo => {
    //             return slideInfo.id === activePage;
    //         });

    //         this.setState({ slide });
    //     }
    // }

    render() {
        const { activeSlide } = this.props.store;

        // console.log(this.props.store.activePage);

        console.log("FULL SLIDE:", activeSlide);

        // this.getSlideData();

        return (
            <div>
                {activeSlide &&
                    activeSlide.content.text.map((textInfo, index) => {
                        return (
                            <TextInput
                                key={index}
                                editorData={textInfo.editor}
                            />
                        );
                    })}
            </div>
        );
    }
}

FullSlide.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(FullSlide));
