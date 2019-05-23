/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import FullSlide from "./FullSlide";
import { wrapWithStoreAndProps } from "../../../config/store";

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
