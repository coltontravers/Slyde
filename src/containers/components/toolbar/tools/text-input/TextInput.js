import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
