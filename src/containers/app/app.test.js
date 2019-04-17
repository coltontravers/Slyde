import React from "react";
import { shallow } from "enzyme";
import App from "./app";

describe("<App />", () => {
    test("Renders correctly", () => {
        expect(shallow(<App />).exists()).toBe(true);
    });
});
