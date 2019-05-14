import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

class CompactSlide extends Component {
    render() {
        return <div>This is a slide preview!</div>;
    }
}

// CompactSlide.propTypes = {
//     store: PropTypes.object.isRequired,
// };

export default inject("store")(observer(CompactSlide));
