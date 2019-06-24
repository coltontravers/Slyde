import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-select";
import { FontSizeWrapper } from "./TextToolbarFontSize.styles";

const options = [
    { value: "6", label: "6" },
    { value: "8", label: "8" },
    { value: "10", label: "10" },
    { value: "12", label: "12" },
    { value: "14", label: "14" },
    { value: "16", label: "16" },
    { value: "18", label: "18" },
    { value: "20", label: "20" },
    { value: "22", label: "22" },
    { value: "24", label: "24" },
    { value: "26", label: "26" },
    { value: "28", label: "28" },
    { value: "30", label: "30" }
];

class TextToolbarFontSize extends Component {
    state = {
        selectedOption: null
    };

    handleChange = selectedOption => {
        this.props.onSelection(selectedOption);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <FontSizeWrapper>
                <Select
                    value={selectedOption}
                    onChange={e => this.handleChange(e)}
                    options={options}
                />
            </FontSizeWrapper>
        );
    }
}

TextToolbarFontSize.propTypes = {
    onSelection: PropTypes.func.isRequired
};

export default TextToolbarFontSize;
