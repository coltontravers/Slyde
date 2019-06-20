import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-select";
import { FontFamilyWrapper } from "./TextToolbarFontFamily.styles";

const options = [{ value: "timesNewRoman", label: "Times New Roman" }];

class TextToolbarFontFamily extends Component {
    state = {
        selectedOption: null
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
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

// TextToolbarFontSize.defaultProps = {
//     active: false,
//     children: "",
//     onMouseDown: () => {}
// };

// TextToolbarFontSize.propTypes = {
//     active: PropTypes.bool,
//     children: PropTypes.any,
//     onMouseDown: PropTypes.func
// };

export default TextToolbarFontFamily;
