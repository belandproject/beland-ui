"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var SmartIcon_1 = require("./SmartIcon");
(0, react_1.storiesOf)('SmartIcon', module)
    .addDecorator(react_2.default)
    .add('Smart Icon', function () { return React.createElement(SmartIcon_1.SmartIcon, null); });
