import React, { Component } from "react";
import PropTypes from "prop-types";
// import slideTools from "../slide-tools/slide-tools";
import TextInput from "../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    render() {
        const { slides } = this.props;
        return (
            <div>
                {/* <TextInput />; */}
                {slides.map((slide, index) => {
                    // const ComponentName = slideTools[slide.componentType];
                    // console.log(
                    //     "THE COMPONENT NAME:",
                    //     ComponentName,
                    //     slideTools
                    // );
                    return <TextInput {...slide} key={index} />;
                })}
            </div>
        );
    }
}

FullSlide.propTypes = {
    slides: PropTypes.array.isRequired
};

export default FullSlide;
