import { Value } from "slate";
import Plain from "slate-plain-serializer";
import { decorate, observable, computed, action } from "mobx";

// import { inject, observer, Provider } from "mobx-react";
// import Uuid from "uuid/v4";
// import React from "react";

const emptyState = Plain.deserialize("");

class Store {
    activePage = "1";

    toolbar = {
        activeTool: ""
    };

    activeEditor = null;

    updateActiveEditor(editor) {
        this.activeEditor = editor;
    }

    updateSlideText = (slideId, editorData) => {
        const slideIndex = this.slides.findIndex(slideInfo => {
            return slideInfo.id === slideId;
        });

        const slide = this.slides[slideIndex];

        slide.content.text[0].editor = editorData;

        const newSlides = [...this.slides];

        newSlides[slideIndex] = slide;

        this.slides = newSlides;
    };

    initialEditorData = emptyState;

    changePage = id => {
        this.activePage = id;
    };

    // Output these slides from the store to a json file when they want to save.

    slides = [
        {
            id: "1", // Uuid(),
            componentType: "TextInput",
            position: {
                x: "100px",
                y: "100px"
            },
            dimensions: {
                height: "50px",
                width: "50px"
            },
            content: {
                text: [
                    {
                        editor: Value.create({
                            document: {
                                object: "document",
                                nodes: [
                                    {
                                        object: "block",
                                        type: "paragraph",
                                        nodes: [
                                            {
                                                object: "text",
                                                marks: [],
                                                text:
                                                    "By default, pasting content into a Slate editor will use the content's plain text representation. This is fine for some use cases, but sometimes you want to actually be able to paste in content and have it parsed into blocks and links and things. To do this, you need to add a parser that triggers on paste. This is an example of doing exactly that!"
                                            }
                                        ],
                                        marks: []
                                    },
                                    {
                                        object: "block",
                                        type: "paragraph",
                                        nodes: [
                                            {
                                                object: "text",
                                                marks: [],
                                                text:
                                                    "Try it out for yourself! Copy and paste some rendered HTML content (not the source code) from another site into this editor."
                                            }
                                        ],
                                        marks: []
                                    }
                                ],
                                marks: []
                            }
                        }),
                        color: "white",
                        fontSize: "12",
                        bold: false,
                        italics: false,
                        underline: false
                    }
                ]
            }
        },
        {
            id: "2", // Uuid(),
            componentType: "TextInput",
            position: {
                x: "100px",
                y: "100px"
            },
            dimensions: {
                height: "50px",
                width: "50px"
            },
            content: {
                text: [
                    {
                        editor: Value.fromJSON({
                            document: {
                                nodes: [
                                    {
                                        object: "block",
                                        type: "paragraph",
                                        nodes: [
                                            {
                                                object: "text",
                                                leaves: [
                                                    {
                                                        text:
                                                            "This is the second slide "
                                                    },
                                                    {
                                                        text: "rich",
                                                        marks: [
                                                            {
                                                                type: "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text: " text, "
                                                    },
                                                    {
                                                        text: "much",
                                                        marks: [
                                                            {
                                                                type: "italic"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text: " better than a "
                                                    },
                                                    {
                                                        text: "<textarea>",
                                                        marks: [
                                                            {
                                                                type: "code"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text: "!"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }),
                        color: "white",
                        fontSize: "12",
                        bold: false,
                        italics: false,
                        underline: false
                    }
                ]
            }
        }
    ];

    get activeSlide() {
        const slide = this.slides.find(slideInfo => {
            return slideInfo.id === this.activePage;
        });

        return slide;
    }
}
decorate(Store, {
    activePage: observable,
    toolbar: observable,
    activeEditor: observable,
    initialEditorData: observable,
    slides: observable,
    activeSlide: computed,
    updateActiveEditor: action,
    changePage: action,
    updateSlideText: action
});

export default new Store();
