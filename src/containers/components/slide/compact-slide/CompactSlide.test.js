/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import CompactSlide from "./CompactSlide";
import CompactSlideView from "./compact-slide-view/CompactSlideView";
import { wrapWithStoreAndProps } from "../../../config/store";

const tests = describe("<CompactSlide />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(
            [CompactSlideView],
            [{ slideNumber: 0 }]
        );
        shallowComponent = mount(wrapper);
    });

    it("Render CompactSlide", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
