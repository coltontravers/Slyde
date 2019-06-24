// /* eslint-disable import/no-extraneous-dependencies */
// import { storiesOf } from "@storybook/react";
// import { observer } from "mobx-react";
// import React, { Component } from "react";
// import { specs } from "storybook-addon-specifications";
// import Store, { wrapWithStoreAndProps } from "../../../../../config/store";
// import CodeBlock from "./CodeBlock";
// import tests from "./CodeBlock.test";

// const stories = storiesOf("Code Block", module);

// stories.add("Default Code Block", () => {
//     class CodeBlockComponent extends Component {
//         render() {
//             return (
//                 <div>
//                     {wrapWithStoreAndProps(
//                         [CodeBlock],
//                         [
//                             {
//                                 children:
//                                     "This is the text inside the code block."
//                             }
//                         ],
//                         Store
//                     )}
//                 </div>
//             );
//         }
//     }

//     const ObserverComponent = observer(CodeBlockComponent);

//     specs(() => tests);

//     return <ObserverComponent />;
// });
