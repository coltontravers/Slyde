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
    constructor(props) {
        super(props);

        const {
            mark: {
                data: { fontSize }
            }
        } = this.props;

        this.state = {
            selectedOption: { value: fontSize, label: fontSize }
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            nextProps.mark &&
            nextProps.mark.data.fontSize &&
            nextProps.mark.data.fontSize !== prevState.selectedOption
        ) {
            return {
                selectedOption: {
                    value: nextProps.mark.data.fontSize,
                    label: nextProps.mark.data.fontSize
                }
            };
        }
        return null;
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption: { value: selectedOption, label: selectedOption }
        });
        this.props.onSelection(selectedOption);
    };

    render() {
        const {
            selectedOption: { value, label }
        } = this.state;

        return (
            <FontSizeWrapper>
                <Select
                    // defaultValue="6"
                    value={[{ value, label }]}
                    onChange={this.handleChange}
                    options={options}
                    isSearchable
                    placeholder="font size..."
                />
            </FontSizeWrapper>
        );
    }
}

TextToolbarFontSize.defaultProps = {
    mark: { data: { fontSize: "12" }, object: "mark", type: "font-size" }
};

TextToolbarFontSize.propTypes = {
    onSelection: PropTypes.func.isRequired,
    mark: PropTypes.object
};

export default TextToolbarFontSize;
