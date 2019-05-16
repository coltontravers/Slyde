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

        this.slides[slideIndex] = slide;
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
                x: "123px",
                y: "123px"
            },
            dimensions: {
                height: "50px",
                width: "500px"
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
                                                            "This is editable (TeStInG) "
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
                                    },
                                    {
                                        object: "block",
                                        type: "paragraph",
                                        nodes: [
                                            {
                                                object: "text",
                                                leaves: [
                                                    {
                                                        text:
                                                            "Since it's rich text, you can do things like turn a selection of text "
                                                    },
                                                    {
                                                        text: "bold",
                                                        marks: [
                                                            {
                                                                type: "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text:
                                                            ", or add a semantically rendered block quote in the middle of the page, like this:"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        object: "block",
                                        type: "block-quote",
                                        nodes: [
                                            {
                                                object: "text",
                                                leaves: [
                                                    {
                                                        text: "A wise quote."
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        object: "block",
                                        type: "paragraph",
                                        nodes: [
                                            {
                                                object: "text",
                                                leaves: [
                                                    {
                                                        text:
                                                            "Try it out for yourself!"
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
        },
        {
            id: "2", // Uuid(),
            componentType: "TextInput",
            position: {
                x: "123px",
                y: "123px"
            },
            dimensions: {
                height: "50px",
                width: "500px"
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
