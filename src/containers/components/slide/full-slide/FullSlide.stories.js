/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import FullSlide from "./FullSlide";
import tests from "./FullSlide.test";
import { wrapWithStoreAndProps } from "../../../config/store";

const stories = storiesOf("Full Slide", module);

stories.add("Default FullSlide", () => {
    const Component = wrapWithStoreAndProps(FullSlide, { slideIndex: 0 });
    specs(() => tests);

    return Component;
});
