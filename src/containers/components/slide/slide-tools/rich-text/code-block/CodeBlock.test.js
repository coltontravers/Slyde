/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../../config/store";
import CodeBlock from "./CodeBlock";

const tests = describe("<CodeBlock />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(
            [CodeBlock],
            [
                {
                    children: "This is the text inside the code block."
                }
            ]
        );

        shallowComponent = mount(wrapper);
    });

    it("Render CodeBlock", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
