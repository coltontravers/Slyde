/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import CompactSlide from "./CompactSlide";
import CompactSlideView from "./compact-slide-view/CompactSlideView";
import { wrapWithStoreAndProps } from "../../../config/store";
import tests from "./CompactSlide.test";

const stories = storiesOf("Compact Slide", module);

stories.add("Default Compact Slide", () => {
    const Component = wrapWithStoreAndProps(
        [CompactSlideView],
        [{ slideNumber: 0 }]
    );

    specs(() => tests);

    return Component;
});
