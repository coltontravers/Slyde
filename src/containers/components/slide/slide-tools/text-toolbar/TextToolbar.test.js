/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
import { mount } from "enzyme";
import expect from "expect";
import { describe, it, beforeEach } from "storybook-addon-specifications";
import Store, { wrapWithStoreAndProps } from "../../../../config/store";
import TextToolbar from "./TextToolbar";

const tests = describe("<TextToolbar />", () => {
    let wrapper;
    let shallowComponent;

    beforeEach(() => {
        wrapper = wrapWithStoreAndProps(
            [TextToolbar],
            [
                {
                    editorValue: Store.slides[0].content.text[0].editor
                }
            ],
            Store
        );
        shallowComponent = mount(wrapper);
    });

    it("Render Text Toolbar", () => {
        expect(shallowComponent.exists()).toBeTruthy();
    });
});

export default tests;
