/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../config/store";
import tests from "./SlidePreview.test";
import SlidePreview from "./SlidePreview";

const stories = storiesOf("Slide Preview", module);

stories.add("Default Slide Preview", () => {
    const Component = wrapWithStoreAndProps(SlidePreview);
    specs(() => tests);

    return Component;
});
