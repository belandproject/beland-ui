"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var AvatarFace_1 = require("./AvatarFace");
var Mana_1 = require("../Mana/Mana");
var avatar_1 = require("../../data/avatar");
react_1.storiesOf('AvatarFace', module)
    .addDecorator(react_2.default)
    .add('Single', function () { return React.createElement(AvatarFace_1.AvatarFace, { size: "large", avatar: avatar_1.avatar }); })
    .add('Sizes', function () { return (React.createElement(React.Fragment, null,
    React.createElement(AvatarFace_1.AvatarFace, { size: "tiny", avatar: avatar_1.avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "small", avatar: avatar_1.avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "medium", avatar: avatar_1.avatar }),
    React.createElement(AvatarFace_1.AvatarFace, { size: "large", avatar: avatar_1.avatar }))); })
    .add('In a paragraph', function () { return (React.createElement("p", null,
    "You've transferred ",
    React.createElement(Mana_1.Mana, { inline: true }, "1,000"),
    " to",
    ' ',
    React.createElement(AvatarFace_1.AvatarFace, { size: "tiny", inline: true, avatar: avatar_1.avatar }),
    " ",
    React.createElement("strong", null, "cazala"))); });
