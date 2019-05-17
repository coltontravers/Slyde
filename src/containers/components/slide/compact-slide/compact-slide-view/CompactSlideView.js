import React, { Component } from "react";
import PropTypes from "prop-types";
import Plain from "slate-plain-serializer";

class CompactSlideView extends Component {
    render() {
        const { activeSlide } = this.props;

        return (
            <div>
                {activeSlide &&
                    activeSlide.content.text.map((textInfo, index) => {
                        return (
                            <div key={index}>
                                {Plain.serialize(textInfo.editor)}
                            </div>
                        );
                    })}
            </div>
        );
    }
}

CompactSlideView.propTypes = {
    activeSlide: PropTypes.object.isRequired
};

export default CompactSlideView;
