import React, { Component } from "react";
import PropTypes from "prop-types";
// import Html from "slate-html-serializer";
import Plain from "slate-plain-serializer";

// const BLOCK_TAGS = {
//     blockquote: "quote",
//     p: "paragraph",
//     pre: "code"
// };

// Add a dictionary of mark tags.
// const MARK_TAGS = {
//     em: "italic",
//     strong: "bold",
//     u: "underline"
// };

/* eslint-disable */
// const rules = [
//     {
//         deserialize(el, next) {
//             const type = BLOCK_TAGS[el.tagName.toLowerCase()];
//             if (type) {
//                 return {
//                     object: "block",
//                     type: type,
//                     data: {
//                         className: el.getAttribute("class")
//                     },
//                     nodes: next(el.childNodes)
//                 };
//             }
//         },
//         serialize(obj, children) {
//             if (obj.object == "block") {
//                 switch (obj.type) {
//                     case "code":
//                         return (
//                             <pre>
//                                 <code>{children}</code>
//                             </pre>
//                         );
//                     case "paragraph":
//                         return (
//                             <p className={obj.data.get("className")}>
//                                 {children}
//                             </p>
//                         );
//                     case "quote":
//                         return <blockquote>{children}</blockquote>;
//                 }
//             }
//         }
//     },
//     // Add a new rule that handles marks...
//     {
//         deserialize(el, next) {
//             const type = MARK_TAGS[el.tagName.toLowerCase()];
//             if (type) {
//                 return {
//                     object: "mark",
//                     type: type,
//                     nodes: next(el.childNodes)
//                 };
//             }
//         },
//         serialize(obj, children) {
//             if (obj.object == "mark") {
//                 switch (obj.type) {
//                     case "bold":
//                         return <strong>{children}</strong>;
//                     case "italic":
//                         return <em>{children}</em>;
//                     case "underline":
//                         return <u>{children}</u>;
//                 }
//             }
//         }
//     }
// ];
/* eslint-enable */

// const html = new Html({ rules });

class CompactSlideView extends Component {
    render() {
        const { activeSlide } = this.props;

        return (
            <div>
                {activeSlide.content.text.map((textInfo, index) => {
                    // We will use the html serializer later on.
                    return (
                        <div key={index}>
                            {Plain.serialize(textInfo.editor)}
                        </div>
                    );
                    // return <div key={index}>{html.serialize(textInfo.editor)}</div>;
                })}
            </div>
        );
    }
}

CompactSlideView.propTypes = {
    activeSlide: PropTypes.object.isRequired
};

export default CompactSlideView;
