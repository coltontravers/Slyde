import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { GeneralButton } from "../tools.styles"; // Instead of importing here, just extend it in the styles for this component.

class TextInput extends Component {
    render() {
        return (
            <GeneralButton>
                <FontAwesomeIcon icon={faEdit} />
            </GeneralButton>
        );
    }
}

export default inject("store")(observer(TextInput));
