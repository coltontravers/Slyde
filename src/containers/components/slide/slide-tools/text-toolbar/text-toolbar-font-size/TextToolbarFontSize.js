import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import Select from "react-select";
import { FontSizeWrapper } from "./TextToolbarFontSize.styles";

/* eslint-disable */
const createMark = fontSize => ({
    type: "font-size",
    data: { fontSize }
});

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

    handleChange = (selectedOption, b, c) => {
        const { selection } = this.props.store.activeEditor.value;

        console.log("THE SELECTION:", selection.toJSON(), selectedOption, b, c);

        // Replace this with a better catch-all solution for text inside the selection.
        // https://docs.slatejs.org/slate-core/commands#replacemark
        this.props.store.activeEditor.replaceMark(
            {
                type: "font-size",
                data: { fontSize: "23" }
            },
            { type: "font-size", data: { fontSize: selectedOption.value } }
        );
    };

    render() {
        // Pull in the size of the current selected text.
        // const { onMouseDown, active } = this.props;
        const { selectedOption } = this.state;

        return (
            <FontSizeWrapper>
                <Select
                    value={selectedOption}
                    onChange={(e, b, c) => this.handleChange(e, b, c)}
                    options={options}
                />
            </FontSizeWrapper>
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

export default inject("store")(observer(TextToolbarFontSize));
