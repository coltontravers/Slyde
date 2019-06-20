import { decorate, observable, computed, action } from "mobx";
import { inject, observer, Provider } from "mobx-react";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Plain from "slate-plain-serializer";
import { Value } from "slate";
import Uuid from "uuid";

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
            content: [
                {
                    id: Uuid(),
                    editor: Value.fromJSON({
                        object: "value",
                        document: {
                            object: "document",
                            nodes: [
                                {
                                    object: "block",
                                    type: "font-size",
                                    nodes: [
                                        {
                                            object: "text",
                                            marks: [
                                                {
                                                    type: "font-size",
                                                    data: { fontSize: "23" }
                                                }
                                            ],
                                            text:
                                                "By default, pasting content into a Slate editor will use the content's plain text representation. This is fine for some use cases, but sometimes you want to actually be able to paste in content and have it parsed into blocks and links and things. To do this, you need to add a parser that triggers on paste. This is an example of doing exactly that!"
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
                    underline: false,
                    top: 20,
                    left: 20,
                    width: "100%",
                    height: "auto",
                    title: "Drag me around", // remove later
                    contentType: "textEditor"
                }
            ]
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

    updateSlideData = (slideId, slideData) => {
        const slideIndex = this.slides.findIndex(slideInfo => {
            return slideInfo.id === slideId;
        });

        const newSlides = [...this.slides];

        newSlides[slideIndex] = slideData;

        this.slides = newSlides;
    };

    updateSlideText = (slideId, editorData) => {
        const slideIndex = this.slides.findIndex(slideInfo => {
            return slideInfo.id === slideId;
        });

        const slide = this.slides[slideIndex];

        slide.content[0].editor = editorData;

        const newSlides = [...this.slides];

        newSlides[slideIndex] = slide;

        this.slides = newSlides;
    };

    get activeSlide() {
        const { slides } = this;

        const slide = slides.find(slideInfo => {
            return slideInfo.id === this.activePage;
        });

        return { ...slide };
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
    updateSlideText: action,
    updateSlideData: action
});

export const wrapWithStoreAndProps = (storyComponents, props, newStore) => {
    if (newStore) {
        return (
            <Router>
                <Provider store={newStore}>
                    <div>
                        {storyComponents.map((component, index) => {
                            const Component = inject("store")(
                                observer(component)
                            );

                            return <Component {...props[index]} key={index} />;
                        })}
                    </div>
                </Provider>
            </Router>
        );
    }

    return (
        <Router>
            <Provider store={new Store()}>
                <div>
                    {storyComponents.map((component, index) => {
                        const Component = inject("store")(observer(component));

                        return <Component {...props[index]} key={index} />;
                    })}
                </div>
            </Provider>
        </Router>
    );
};

export default new Store();

// import { decorate, observable } from "mobx";
// import { Value } from "slate";

// class Store {
//     activeEditor = null;

//     activePage = "1";

//     slides = [
//         {
//             id: "1", // Uuid(),
//             componentType: "TextInput",
//             position: {
//                 x: "100px",
//                 y: "100px"
//             },
//             dimensions: {
//                 height: "50px",
//                 width: "50px"
//             },
//             content: {
//                 text: [
//                     {
//                         editor: Value.fromJSON({
//                             object: "value",
//                             document: {
//                                 object: "document",
//                                 nodes: [
//                                     {
//                                         object: "block",
//                                         type: "paragraph",
//                                         nodes: [
//                                             {
//                                                 object: "text",
//                                                 text:
//                                                     "By default, pasting content into a Slate editor will use the content's plain text representation. This is fine for some use cases, but sometimes you want to actually be able to paste in content and have it parsed into blocks and links and things. To do this, you need to add a parser that triggers on paste. This is an example of doing exactly that!"
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         object: "block",
//                                         type: "paragraph",
//                                         nodes: [
//                                             {
//                                                 object: "text",
//                                                 text:
//                                                     "Try it out for yourself! Copy and paste some rendered HTML content (not the source code) from another site into this editor."
//                                             }
//                                         ]
//                                     }
//                                 ]
//                             }
//                         }),
//                         color: "white",
//                         fontSize: "12",
//                         bold: false,
//                         italics: false,
//                         underline: false
//                     }
//                 ]
//             }
//         }
//     ];
// }

// decorate(Store, {
//     slides: observable
// });

// export const wrapWithStoreAndProps = (storyComponents, props, newStore) => {
//     if (newStore) {
//         return (
//             <Router>
//                 <Provider store={newStore}>
//                     <div>
//                         {storyComponents.map((component, index) => {
//                             const Component = inject("store")(
//                                 observer(component)
//                             );

//                             return <Component {...props[index]} key={index} />;
//                         })}
//                     </div>
//                 </Provider>
//             </Router>
//         );
//     }

//     return (
//         <Router>
//             <Provider store={new Store()}>
//                 <div>
//                     {storyComponents.map((component, index) => {
//                         const Component = inject("store")(observer(component));

//                         return <Component {...props[index]} key={index} />;
//                     })}
//                 </div>
//             </Provider>
//         </Router>
//     );
// };

// export default new Store();
