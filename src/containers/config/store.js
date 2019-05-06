import { Value } from "slate";
import { inject, observer, Provider } from "mobx-react";
import Uuid from "uuid/v4";
import React from "react";

// Create our initial value...
const initialValue = Value.fromJSON({
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
                                text: "This is editable "
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
                                text: "Try it out for yourself!"
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

class Store {
    toolbar = {
        activeTool: ""
    };

    activeEditor = null;

    updateActiveEditor = editor => {
        this.activeEditor = editor;
    };

    initialEditorData = initialValue;

    // Output these slides from the store to a json file when they want to save.

    slides = [
        {
            id: Uuid(),
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
                text: "This is just some test text for the initial store.",
                color: "white",
                fontSize: "12",
                bold: false,
                italics: false,
                underline: false
            }
        },
        {
            id: Uuid(),
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
                text: "This is another slide.",
                color: "white",
                fontSize: "12",
                bold: false,
                italics: false,
                underline: false
            }
        }
    ];
}

export const wrapWithStoreAndProps = (StoryComponent, Props) => {
    const Component = inject("store")(observer(StoryComponent));
    return (
        <Provider store={new Store()}>
            <Component {...Props} />
        </Provider>
    );
};

export default Store;
