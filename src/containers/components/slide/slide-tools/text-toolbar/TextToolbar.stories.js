/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { specs } from "storybook-addon-specifications";
import Store, { wrapWithStoreAndProps } from "../../../../config/store";
import tests from "./TextToolbar.test";
import TextToolbar from "./TextToolbar";
import TextInput from "../text-input/TextInput";

const stories = storiesOf("Text Toolbar", module);

stories.add("Default Text Toolbar", () => {
    class TextToolbarWrapper extends Component {
        render() {
            return (
                <div>
                    {wrapWithStoreAndProps(
                        [TextToolbar, TextInput],
                        [
                            {
                                editorValue:
                                    Store.slides[0].content.text[0].editor
                            },
                            {
                                editorValue:
                                    Store.slides[0].content.text[0].editor,
                                fullSlide: true
                            }
                        ],
                        Store
                    )}
                </div>
            );
        }
    }

    const ObserverComponent = observer(TextToolbarWrapper);

    specs(() => tests);

    return <ObserverComponent />;
});
