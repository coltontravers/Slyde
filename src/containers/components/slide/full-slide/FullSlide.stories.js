/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../config/store";
import tests from "./FullSlide.test";
import FullSlide from "./FullSlide";

const stories = storiesOf("Full Slide", module);

stories.add("Default FullSlide", () => {
    const Component = wrapWithStoreAndProps(FullSlide, { slideIndex: 0 });
    specs(() => tests);

    return Component;
});
