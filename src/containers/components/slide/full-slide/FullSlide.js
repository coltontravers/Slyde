import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
// import slideTools from "../slide-tools/slide-tools";
import TextInput from "../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    render() {
        const { slideIndex, store: { slides } = [] } = this.props;
        const slide = slides[slideIndex];

        return (
            <div>
                {/* I will have to map through the object to display all of the info for the slide. Since the possibility of so many components, handle that logic/importing in another file. */}
                <TextInput {...slide} />
            </div>
        );
    }
}

FullSlide.propTypes = {
    store: PropTypes.object.isRequired,
    slideIndex: PropTypes.number.isRequired
};

export default inject("store")(observer(FullSlide));
