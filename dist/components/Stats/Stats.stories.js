"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Bean_1 = require("../Bean/Bean");
var Stats_1 = require("./Stats");
(0, react_1.storiesOf)('Stats', module)
    .addDecorator(react_2.default)
    .add('Single Result', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Stats_1.Stats, { title: "Total Voted" },
        React.createElement(Bean_1.Bean, null, "1,235,345")))); })
    .add('Poll Results', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Stats_1.Stats, { title: "Token" },
        React.createElement(Bean_1.Bean, null, "BEAN")),
    React.createElement(Stats_1.Stats, { title: "Total Voted" },
        React.createElement(Bean_1.Bean, null, "1,235,345")),
    React.createElement(Stats_1.Stats, { title: "Total Votes" }, "20"),
    React.createElement(Stats_1.Stats, { title: "Parcial Result" }, "Yes"),
    React.createElement(Stats_1.Stats, { title: "Time Left" }, "1 week"))); });
