/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { specs } from "storybook-addon-specifications";
import Store, { wrapWithStoreAndProps } from "../../../../../config/store";
import BlockQuote from "./BlockQuote";
import tests from "./BlockQuote.test";

const stories = storiesOf("Block Quote", module);

stories.add("Default Block Quote", () => {
    class BlockQuoteComponent extends Component {
        render() {
            return (
                <div>
                    {wrapWithStoreAndProps(
                        [BlockQuote],
                        [
                            {
                                children:
                                    "This is the text inside the blockquote."
                            }
                        ],
                        Store
                    )}
                </div>
            );
        }
    }

    const ObserverComponent = observer(BlockQuoteComponent);

    specs(() => tests);

    return <ObserverComponent />;
});
