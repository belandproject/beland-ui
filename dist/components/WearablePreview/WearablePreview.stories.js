"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var __1 = require("../..");
require("./WearablePreview.stories.css");
react_1.storiesOf('WearablePreview', module)
    .add('Preview an item', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488", itemId: "5" }))); })
    .add('Preview a token', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488", tokenId: "1" }))); })
    .add('Preview a token from ropsten', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0x07e2a8fce1eb1ddf8e7d8de3f86654abe32eb97f", tokenId: "1", dev: true }))); })
    .add('Preview a texture wearable', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xfeb52cbf71b9adac957c6f948a6cf9980ac8c907", tokenId: "3073" }))); })
    .add('Using custom skin', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0x994684b980d6faff06ff36b13c243c31d1b3aa0e", itemId: "0", skin: "ff0000" }))); })
    .add('Using custom hair', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xe3d2c4ec777fb88dd219905cd896f79a592adf30", itemId: "0", hair: "00ff00" }))); })
    .add('Using custom shape', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xe3d2c4ec777fb88dd219905cd896f79a592adf30", itemId: "0", hair: "00ff00", bodyShape: "female" }))); })
    .add('Using a profile', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6" }))); })
    .add('Using a profile + emote', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6", emote: "fashion" }))); })
    .add('Using a wearable preview + profile + emote', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0x186c788f9c172934b790b868faf3b78b84e34e89", itemId: "0", profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6", emote: "fashion" }))); })
    .add('Using static camera', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { profile: "0xc85a0a34d5f9f2239ab0622a41a2c2560ff119c6", camera: "static" }))); })
    .add('Using onLoad callback', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488", itemId: "5", onLoad: function () { return console.log('loaded!'); } }))); })
    .add('Using onError callback', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.WearablePreview, { contractAddress: "invalidAddress", itemId: "invalidItem", onError: function (error) { return console.error(error.message); } }))); })
    .add('Use as Hero', function () { return (React.createElement("div", { className: "WearablePreview-story-container" },
    React.createElement(__1.Navbar, { isFullscreen: true, activePage: "marketplace" }),
    React.createElement(__1.Tabs, { isFullscreen: true },
        React.createElement(__1.Tabs.Tab, { active: true }, "Atlas"),
        React.createElement(__1.Tabs.Tab, null, "Market"),
        React.createElement(__1.Tabs.Tab, null, "My Assets")),
    React.createElement(__1.Page, { isFullscreen: true },
        React.createElement(__1.Hero, { height: 420 },
            React.createElement(__1.WearablePreview, { contractAddress: "0xee8ae4c668edd43b34b98934d6d2ff82e41e6488", itemId: "5" })),
        React.createElement(__1.Container, null,
            React.createElement(__1.Header, null, "Hello Wolrd"),
            React.createElement("p", null, "This page has a hero"))),
    React.createElement(__1.Footer, null))); });
