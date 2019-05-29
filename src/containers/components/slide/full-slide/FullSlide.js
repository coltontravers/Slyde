import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Value } from "slate";
import { TextInputWrapper } from "./FullSlide.styles";
import TextInput from "../slide-tools/text-input/TextInput";

class FullSlide extends Component {
    render() {
        const {
            store: { activeSlide }
        } = this.props;

        console.log("FULL SLIDE PROPS:", this.props);

        return (
            <TextInputWrapper>
                {activeSlide &&
                    activeSlide.content.text.map((textInfo, index) => (
                        <TextInput
                            key={index}
                            fullSlide
                            editorData={textInfo.editor}
                        />
                    ))}
            </TextInputWrapper>
        );
    }
}

FullSlide.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject("store")(observer(FullSlide));
