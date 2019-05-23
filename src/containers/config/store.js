import { decorate, observable, computed, action } from "mobx";
import Plain from "slate-plain-serializer";

const emptyState = Plain.deserialize("");

class Store {
    activeEditor = null;

    activePage = "1";

    initialEditorData = emptyState;

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
                        editor: {
                            object: "value",
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
                                        ]
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
                                        ]
                                    }
                                ]
                            }
                        },
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
                        editor: {
                            object: "value",
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
                                                text: "This is the 2nd slide!"
                                            }
                                        ]
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
                                        ]
                                    }
                                ]
                            }
                        },
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

    toolbar = {
        activeTool: ""
    };

    changePage = id => {
        this.activePage = id;
    };

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
