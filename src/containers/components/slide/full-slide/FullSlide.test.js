/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../config/store";
import FullSlide from "./FullSlide";

const tests = describe("<FullSlide />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(FullSlide, { slideIndex: 0 });
        shallowComponent = mount(wrapper);
    });

    it("Render FullSlide", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });

    it("Render TextInput in FullSlide", () => {
        expect(shallowComponent.find("TextInput").exists()).toBeTruthy();
    });
});

export default tests;
