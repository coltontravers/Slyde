class Store {
    toolbar = {
        activeTool: ""
    };

    // Output these slides from the store to a json file when they want to save.

    // I can add separate classes for these components so I can just do new Slide(), etc.
    slides = [
        {
            componentType: "textInput",
            position: {
                x: 123,
                y: 123
            },
            dimensions: {
                height: 50,
                width: 50
            },
            content: {
                text: "This is just some test text for the initial store.",
                color: "white",
                fontSize: 12,
                bold: false,
                italics: false,
                underline: false
            }
        }
    ];
}

export default Store;
