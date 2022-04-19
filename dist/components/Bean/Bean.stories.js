"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var schemas_1 = require("@beland/schemas");
var Header_1 = require("../Header/Header");
var Bean_1 = require("./Bean");
(0, react_1.storiesOf)('Mana', module)
    .addDecorator(react_2.default)
    .add('Symbol', function () { return React.createElement(Bean_1.Bean, null); })
    .add('Symbol + MANA', function () { return React.createElement(Bean_1.Bean, null, "Bean"); })
    .add('Total voted', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Header_1.Header, { sub: true }, "Total voted"),
    React.createElement(Bean_1.Bean, null, "1,235,345"))); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Bean_1.Bean, { size: "huge" }, "1,000"),
    React.createElement(Bean_1.Bean, { size: "large" }, "1,000"),
    React.createElement(Bean_1.Bean, { size: "medium" }, "1,000"),
    React.createElement(Bean_1.Bean, { size: "small" }, "1,000"),
    React.createElement(Bean_1.Bean, { size: "tiny" }, "1,000"))); })
    .add('In a paragraph', function () { return (React.createElement("p", null,
    "You've voted with ",
    React.createElement(Bean_1.Bean, { inline: true }, "1,000"),
    ".")); })
    .add('Matic', function () { return (React.createElement("p", null,
    "You deposited",
    ' ',
    React.createElement(Bean_1.Bean, { inline: true, network: schemas_1.Network.MATIC }, "1,000"),
    ' ',
    "into Matic Network.")); })
    .add('Matic Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Bean_1.Bean, { network: schemas_1.Network.MATIC, size: "huge" }, "1,000"),
    React.createElement(Bean_1.Bean, { network: schemas_1.Network.MATIC, size: "large" }, "1,000"),
    React.createElement(Bean_1.Bean, { network: schemas_1.Network.MATIC, size: "medium" }, "1,000"),
    React.createElement(Bean_1.Bean, { network: schemas_1.Network.MATIC, size: "small" }, "1,000"),
    React.createElement(Bean_1.Bean, { network: schemas_1.Network.MATIC, size: "tiny" }, "1,000"))); });
