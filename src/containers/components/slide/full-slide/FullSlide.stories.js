/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { specs } from "storybook-addon-specifications";
import FullSlide from "./FullSlide";
import tests from "./FullSlide.test";
import Store, { wrapWithStoreAndProps } from "../../../config/store";

const stories = storiesOf("Full Slide", module);

stories.add("Default FullSlide", () => {
    class FullSlideComponent extends Component {
        render() {
            return (
                <div style={{ width: "600px", height: "600px" }}>
                    {wrapWithStoreAndProps([FullSlide], [{}], Store)}
                </div>
            );
        }
    }

    const ObserverComponent = observer(FullSlideComponent);

    specs(() => tests);

    return <ObserverComponent />;
});
