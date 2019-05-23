/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../config/store";
import TextInput from "./TextInput";
import tests from "./TextInput.test";

const stories = storiesOf("Text Input", module);

stories.add("Default Text Input", () => {
    const Component = wrapWithStoreAndProps(TextInput, {
        dimensions: { width: "100%", height: "500px" },
        position: { x: "0px", y: "0px" }
    });
    specs(() => tests);

    return Component;
});
