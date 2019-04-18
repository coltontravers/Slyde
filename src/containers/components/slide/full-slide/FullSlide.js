import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    render() {
        const { slides } = this.props;
        return (
            <div>
                <TextInput />
            </div>
        );
    }
}

FullSlide.propTypes = {
    slides: PropTypes.array.isRequired
};

export default FullSlide;
