/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../config/store";
import tests from "./Slide.test";
import Slide from "./Slide";

const stories = storiesOf("Slide", module);

stories.add("Default Slide", () => {
    const Component = wrapWithStoreAndProps(Slide);
    specs(() => tests);

    return Component;
});
