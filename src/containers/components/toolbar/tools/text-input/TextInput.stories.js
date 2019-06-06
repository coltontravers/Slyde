/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../config/store";
import TextInput from "./TextInput";
import tests from "./TextInput.test";

const stories = storiesOf("Text Input Toolbar Button", module);

stories.add("Default Text Input Button", () => {
    const Component = wrapWithStoreAndProps([TextInput], [{}]);

    specs(() => tests);

    return Component;
});
