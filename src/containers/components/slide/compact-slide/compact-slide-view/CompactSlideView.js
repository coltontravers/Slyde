// This file needs to have reactive functionality added to it.

import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Html from "slate-html-serializer";
// import { Value } from "slate";
import Store from "../../../../config/store";

const elementTypes = {
    paragraph: "p"
};

const BLOCK_TAGS = {
    blockquote: "quote",
    p: "paragraph",
    pre: "code"
};

const MARK_TAGS = {
    em: "italic",
    strong: "bold",
    u: "underline"
};

/* eslint-disable */
const rules = [
    {
        deserialize(el, next) {
            const type = MARK_TAGS[el.tagName.toLowerCase()];
            if (type) {
                return {
                    object: "mark",
                    type: type,
                    nodes: next(el.childNodes)
                };
            }
        },
        serialize(obj, children, el) {
            if (obj.object == "mark") {
                const Tag = elementTypes[obj.type];

                if (Tag) {
                    return <Tag>{children}</Tag>;
                }
            } else if (obj.object == "block") {
                const Tag = elementTypes[obj.type];

                if (Tag) {
                    return <Tag>{children}</Tag>;
                }
            }
        }
    },

    {
        deserialize(el, next) {
            const type = BLOCK_TAGS[el.tagName.toLowerCase()];
            if (type) {
                return {
                    object: "block",
                    type: type,
                    data: {
                        className: el.getAttribute("class")
                    },
                    nodes: next(el.childNodes)
                };
            }
        },
        serialize(obj, children) {
            if (obj.object == "block") {
                switch (obj.type) {
                    case "code":
                        return (
                            <pre>
                                <code>{children}</code>
                            </pre>
                        );
                    case "paragraph":
                        return (
                            <p className={obj.data.get("className")}>
                                {children}
                            </p>
                        );
                    case "quote":
                        return <blockquote>{children}</blockquote>;
                }
            }
        }
    }
];

const serializer = new Html({ rules });

class CompactSlideView extends Component {
    render() {
        const slide = Store.slides[this.props.slideNumber];

        const text = slide.content.map((textInfo, index) => {
            // const textEditor = textInfo.editor;
            // const textContent = textInfo.editor.toJSON();
            // console.log("THE TEXT INFO FOR:", index, textInfo);
            // console.log(
            //     "COMPARE:",
            //     serializer.serialize({
            //         object: "value",
            //         document: {
            //             object: "document",
            //             nodes: [
            //                 {
            //                     object: "block",
            //                     type: "paragraph",
            //                     nodes: [
            //                         {
            //                             object: "text",
            //                             text:
            //                                 "By default, pasting content into a Slate editor will use the content's plain text representation. This is fine for some use cases, but sometimes you want to actually be able to paste in content and have it parsed into blocks and links and things. To do this, you need to add a parser that triggers on paste. This is an example of doing exactly that!"
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     object: "block",
            //                     type: "paragraph",
            //                     nodes: [
            //                         {
            //                             object: "text",
            //                             text:
            //                                 "Try it out for yourself! Copy and paste some rendered HTML content (not the source code) from another site into this editor."
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     })
            // );

            return serializer.serialize(textInfo.editor);
        });

        return (
            <div>
                {text.map((Text, index) => {
                    return (
                        <div
                            key={index}
                            // Replace this with a better solution.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: Text
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}

CompactSlideView.propTypes = {
    store: PropTypes.object.isRequired,
    slideNumber: PropTypes.number.isRequired
};

export default inject("store")(observer(CompactSlideView));
