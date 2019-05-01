/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../config/store";
import tests from "./CompactSlide.test";
import CompactSlide from "./CompactSlide";

const stories = storiesOf("Compact Slide", module);

stories.add("Default Compact Slide", () => {
    const Component = wrapWithStoreAndProps(CompactSlide, { slideIndex: 0 });
    specs(() => tests);

    return Component;
});
