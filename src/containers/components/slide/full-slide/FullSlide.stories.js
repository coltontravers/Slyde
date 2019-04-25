/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../config/store";
import tests from "./FullSlide.test";
import FullSlide from "./FullSlide";

const stories = storiesOf("FullSlide", module);

stories.add("Render FullSlide", () => {
    const Component = wrapWithStoreAndProps(FullSlide, { slideIndex: 0 });
    specs(() => tests);

    return Component;
});
