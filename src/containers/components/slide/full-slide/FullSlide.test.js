/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { shallow } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import { wrapWithStoreAndProps } from "../../../config/store";
import FullSlide from "./FullSlide";

const tests = describe("Render FullSlide", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(FullSlide, { slideIndex: 0 });
        shallowComponent = shallow(wrapper);
    });

    it("Render FullSlide - It", () => {
        expect(shallowComponent.exists()).toBe(true);
    });
});

export default tests;
