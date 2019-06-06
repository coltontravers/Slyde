/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { shallow } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import Slide from "./Slide";
import Store, { wrapWithStoreAndProps } from "../../config/store";

const tests = describe("<Slide />", () => {
    let wrapper;
    let shallowComponent;

    // beforeEach(() => {
    //     wrapper = wrapWithStoreAndProps([Slide], [{ slideNumber: 0 }], Store);
    //     shallowComponent = mount(wrapper);
    // });

    // it("Render Compact Slide", () => {
    //     wrapper = wrapWithStoreAndProps([Slide], [{ slideNumber: 0 }], Store);
    //     shallowComponent = mount(wrapper);

    //     expect(shallowComponent.exists()).toBeTruthy();
    // });

    it("Render Full Slide", () => {
        wrapper = wrapWithStoreAndProps([Slide], [{ full: true }], Store);
        shallowComponent = shallow(wrapper);

        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
