/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../../config/store";
import BlockQuote from "./BlockQuote";

const tests = describe("<BlockQuote />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(
            [BlockQuote],
            [
                {
                    children: "This is the text inside the blockquote."
                }
            ]
        );

        shallowComponent = mount(wrapper);
    });

    it("Render BlockQuote", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
