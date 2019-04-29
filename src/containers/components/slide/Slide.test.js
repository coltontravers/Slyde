/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../../config/store";
import Slide from "./Slide";

const tests = describe("<Slide />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(Slide, { slideIndex: 0 });
        shallowComponent = mount(wrapper);
    });

    it("Render Slide", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
