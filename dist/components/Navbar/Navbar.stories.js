"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Menu_1 = require("semantic-ui-react/dist/commonjs/collections/Menu");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Button_1 = require("../Button/Button");
var Hero_1 = require("../Hero/Hero");
var Parallax_1 = require("../Parallax/Parallax");
var UserMenu_1 = require("../UserMenu/UserMenu");
var avatar_1 = require("../../data/avatar");
var Navbar_1 = require("./Navbar");
require("./Navbar.stories.css");
(0, react_1.storiesOf)('Navbar', module)
    .addDecorator(react_2.default)
    .add('DAO', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao" })));
})
    .add('Sign In', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", onSignIn: function () { return console.log('Clicked on sign in'); } })));
})
    .add('Sign In Page', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isSignIn: true, onSignIn: function () { return console.log('Clicked on sign in'); } })));
})
    .add('Connecting', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", onSignIn: function () { return console.log('Clicked on sign in'); }, isConnecting: true })));
})
    .add('Connected', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000 })));
})
    .add('On click account', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); } })));
})
    .add('Fullscreen', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement("div", { className: "background" }),
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, isFullscreen: true })));
})
    .add('With hero', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isFullscreen: true }),
        React.createElement(Hero_1.Hero, { height: 442, centered: true },
            React.createElement(Hero_1.Hero.Header, null, "Help us build Beland"),
            React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
            React.createElement(Hero_1.Hero.Content, null,
                React.createElement(Parallax_1.Parallax, null,
                    React.createElement(Parallax_1.Parallax.Layer, { depth: 0.3 },
                        React.createElement("div", { className: "homepage-pyramid small" })),
                    React.createElement(Parallax_1.Parallax.Layer, { depth: 1.5 },
                        React.createElement("div", { className: "homepage-pyramid large" })))))));
})
    .add('With Overlay over Hero', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isFullscreen: true, isOverlay: true }),
        React.createElement(Hero_1.Hero, { className: "over-gradient", height: 442, centered: true },
            React.createElement(Hero_1.Hero.Header, null, "Help us build Beland"),
            React.createElement(Hero_1.Hero.Description, null, "Join the discussion"),
            React.createElement(Hero_1.Hero.Content, null,
                React.createElement("div", { className: "color-layer" })))));
})
    .add('Custom middle menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, middleMenu: React.createElement(Menu_1.default.Item, null,
                React.createElement(Icon_1.default, { name: "bell", onClick: function () { return console.log('Clicked on notification bell'); } })) })));
})
    .add('Custom left menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, leftMenu: React.createElement(React.Fragment, null,
                React.createElement(Menu_1.default.Item, null, "Home"),
                React.createElement(Menu_1.default.Item, null, "About"),
                React.createElement(Menu_1.default.Item, null, "Contact Us")) })));
})
    .add('Custom right menu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, rightMenu: React.createElement(Button_1.Button, { primary: true, size: "small", style: { minWidth: 100 } }, "Get Started") })));
})
    .add('With UserMenu', function () {
    return (React.createElement("div", { className: "Navbar-story-container" },
        React.createElement(Navbar_1.Navbar, { activePage: "dao", isConnected: true, address: "0x68FFc53C43C65C8Dd778969320e21B85b10363cE", mana: 200000, onClickAccount: function () { return console.log('Clicked on account menu'); }, rightMenu: React.createElement(UserMenu_1.UserMenu, { avatar: avatar_1.avatar, isSignedIn: true }) })));
});
