import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-select";
import { FontFamilyWrapper } from "./TextToolbarFontFamily.styles";

const options = [
    { value: "arial", label: "Arial" },
    { value: "times new roman", label: "Times New Roman" }
];

class TextToolbarFontFamily extends Component {
    state = {
        selectedOption: null
    };

    handleChange = selectedOption => {
        this.props.onSelection(selectedOption);
    };

    render() {
        // const { onMouseDown, active } = this.props;
        const { selectedOption } = this.state;

        return (
            <FontFamilyWrapper>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </FontFamilyWrapper>
        );
    }
}

TextToolbarFontFamily.propTypes = {
    onSelection: PropTypes.func.isRequired
};

export default TextToolbarFontFamily;
