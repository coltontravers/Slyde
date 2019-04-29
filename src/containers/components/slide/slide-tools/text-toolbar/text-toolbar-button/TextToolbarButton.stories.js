/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../../config/store";
import tests from "./TextToolbarButton.test";
import TextToolbarButton from "./TextToolbarButton";

const stories = storiesOf("Text Toolbar Button", module);

stories.add("Default Text Toolbar Button", () => {
    const Component = wrapWithStoreAndProps(TextToolbarButton);
    specs(() => tests);

    return Component;
});
