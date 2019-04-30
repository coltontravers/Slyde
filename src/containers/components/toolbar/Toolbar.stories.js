/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { specs } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../config/store";
import tests from "./Toolbar.test";
import Toolbar from "./Toolbar";

const stories = storiesOf("Toolbar", module);

stories.add("Default Toolbar", () => {
    const Component = wrapWithStoreAndProps(Toolbar);
    specs(() => tests);

    return Component;
});
