/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../config/store";
import SlidePreview from "./SlidePreview";

const tests = describe("<SlidePreview />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(SlidePreview, { slideIndex: 0 });
        shallowComponent = mount(wrapper);
    });

    it("Render Slide Preview", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
