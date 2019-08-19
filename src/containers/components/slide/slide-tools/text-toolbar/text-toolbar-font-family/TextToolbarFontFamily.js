import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-select";
import { FontFamilyWrapper } from "./TextToolbarFontFamily.styles";

const options = [
    { value: "arial", label: "Arial" },
    { value: "times new roman", label: "Times New Roman" }
];

class TextToolbarFontFamily extends Component {
    constructor(props) {
        super(props);

        const {
            mark: {
                data: { fontFamily }
            }
        } = this.props;

        this.state = {
            selectedOption: this.getSelectedFont(fontFamily)
        };
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.mark &&
            prevProps.mark.data.fontFamily &&
            prevProps.mark.data.fontFamily !== this.state.selectedOption
        ) {
            return {
                selectedOption: this.getSelectedFont(
                    prevProps.mark.data.fontFamily
                )
            };
        }

        return null;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Compare:", nextProps, prevState);
        if (
            nextProps.mark &&
            nextProps.mark.data.fontFamily &&
            nextProps.mark.data.fontFamily !== prevState.selectedOption
        ) {
            return {
                selectedOption: options.find(option => {
                    return (
                        prevState.selectedOption ===
                        nextProps.mark.data.fontFamily
                    );
                })
            };
        }
        return null;
    }

    getSelectedFont = fontFamily => {
        return options.find(option => {
            return option.value === fontFamily;
        });
    };

    handleChange = selectedOption => {
        this.setState({
            selectedOption: this.getSelectedFont(selectedOption)
        });
        this.props.onSelection(selectedOption);
    };

    render() {
        console.log("State:", this.state);
        const {
            selectedOption: { value, label }
        } = this.state;

        console.log("the selected option:", this.state.selectedOption);

        return (
            <FontFamilyWrapper>
                <Select
                    value={[{ value, label }]}
                    onChange={this.handleChange}
                    options={options}
                    isSearchable
                    placeholder="font family..."
                />
            </FontFamilyWrapper>
        );
    }
}

TextToolbarFontFamily.defaultProps = {
    mark: { data: { fontFamily: "arial" }, object: "mark", type: "font-family" }
};

TextToolbarFontFamily.propTypes = {
    onSelection: PropTypes.func.isRequired,
    mark: PropTypes.object
};

export default TextToolbarFontFamily;
