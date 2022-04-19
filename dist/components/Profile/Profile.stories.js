"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Profile_1 = require("./Profile");
var Bean_1 = require("../Bean/Bean");
var avatar_1 = require("../../data/avatar");
(0, react_1.storiesOf)('Profile', module)
    .addDecorator(react_2.default)
    .add('No avatar', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef" }))); })
    .add('Avatar', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar }))); })
    .add('Image only', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, imageOnly: true }))); })
    .add('Text only', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, textOnly: true }))); })
    .add('Inline', function () { return (React.createElement(React.Fragment, null,
    "You sent ",
    React.createElement(Bean_1.Bean, { inline: true }, "1,000"),
    " to",
    ' ',
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: true }))); })
    .add('Beland', function () { return (React.createElement(React.Fragment, null,
    "You sent ",
    React.createElement(Bean_1.Bean, { inline: true }, "1,000"),
    " to",
    ' ',
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: true, isBeland: true }))); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "normal", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "large", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "huge", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "massive", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "normal", imageOnly: true, isBeland: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "large", imageOnly: true, isBeland: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "huge", imageOnly: true, isBeland: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", avatar: avatar_1.avatar, inline: false, size: "massive", imageOnly: true, isBeland: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", inline: false, size: "normal", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", inline: false, size: "large", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", inline: false, size: "huge", imageOnly: true }),
    React.createElement(Profile_1.Profile, { address: "0xdeadbeef", inline: false, size: "massive", imageOnly: true }))); });
