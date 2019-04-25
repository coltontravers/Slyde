import { configure as configureReact, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { configure as configureEnzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { describe, it } from "storybook-addon-specifications";
import expect from "expect";

window.describe = describe;
window.it = it;
window.expect = expect;

configureEnzyme({ adapter: new Adapter() });

// automatically import all files ending in *.stories.js
// const req = require.context("../stories", true, /\.stories\.js$/);
// const req = require.context("../src/containers", true, /\.stories\.js$/);
const req = require.context("../src", true, /stories\.js$/);
addDecorator(withInfo);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configureReact(loadStories, module);
