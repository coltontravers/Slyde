/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { specs } from "storybook-addon-specifications";
import Store, { wrapWithStoreAndProps } from "../../../../config/store";
import TextInput from "./TextInput";
import tests from "./TextInput.test";

const stories = storiesOf("Text Input", module);

stories.add("Default Text Input", () => {
    class TextInputComponent extends Component {
        render() {
            return (
                <div>
                    {wrapWithStoreAndProps(
                        [TextInput],
                        [
                            {
                                dimensions: { width: "100%", height: "500px" },
                                position: { x: "0px", y: "0px" },
                                editorValue:
                                    Store.slides[0].content[0].editor
                            }
                        ],
                        Store
                    )}
                </div>
            );
        }
    }

    const ObserverComponent = observer(TextInputComponent);

    specs(() => tests);

    return <ObserverComponent />;
});
