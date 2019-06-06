/* eslint-disable import/no-extraneous-dependencies, react/no-multi-comp */
import { storiesOf } from "@storybook/react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { specs } from "storybook-addon-specifications";
import Slide from "./Slide";
import tests from "./Slide.test";
import Store, { wrapWithStoreAndProps } from "../../config/store";

const stories = storiesOf("Slide", module);

// stories.add("Compact Slide", () => {
//     const Component = wrapWithStoreAndProps(
//         [Slide],
//         [{ slideNumber: 0 }],
//         Store
//     );
//     specs(() => tests);

//     return Component;
// });

stories.add("Full Slide", () => {
    class SlideComponent extends Component {
        render() {
            return (
                <div style={{ width: "600px", height: "600px" }}>
                    {wrapWithStoreAndProps(
                        [Slide],
                        [
                            {
                                full: true
                            }
                        ],
                        Store
                    )}
                </div>
            );
        }
    }

    const ObserverComponent = observer(SlideComponent);

    // const Component = wrapWithStoreAndProps([Slide], [{ full: true }], Store);

    specs(() => tests);

    return <ObserverComponent />;
});

// stories.add("Compact Slide", () => {
//     class SlideComponent extends Component {
//         render() {
//             return (
//                 <div style={{ width: "600px", height: "600px" }}>
//                     {wrapWithStoreAndProps(
//                         [Slide],
//                         [
//                             {
//                                 slideNumber: 0
//                             }
//                         ],
//                         Store
//                     )}
//                 </div>
//             );
//         }
//     }

//     const ObserverComponent = observer(SlideComponent);

//     // const Component = wrapWithStoreAndProps([Slide], [{ full: true }], Store);

//     specs(() => tests);

//     return <ObserverComponent />;
// });