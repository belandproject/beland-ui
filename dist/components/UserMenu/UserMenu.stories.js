"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemas_1 = require("@beland/schemas");
var React = require("react");
var MenuItem_1 = require("semantic-ui-react/dist/commonjs/collections/Menu/MenuItem");
var Icon_1 = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var UserMenu_1 = require("./UserMenu");
var avatar_1 = require("../../data/avatar");
(0, react_1.storiesOf)('UserMenu', module)
    .addDecorator(react_2.default)
    .add('Signed out', function () { return React.createElement(UserMenu_1.UserMenu, null); })
    .add('Signed in', function () { return React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar }); })
    .add('Guest', function () { return React.createElement(UserMenu_1.UserMenu, { isSignedIn: true }); })
    .add('Clickable profile', function () { return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onClickProfile: function () { return undefined; } })); })
    .add('Sign Out', function () { return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onSignOut: function () { return undefined; } })); })
    .add('Settings', function () { return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onSignOut: function () { return undefined; }, onClickSettings: function () { return undefined; } })); })
    .add('Extra actions', function () { return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onClickSettings: function () { return undefined; }, menuItems: React.createElement(React.Fragment, null,
        React.createElement(MenuItem_1.default, null,
            React.createElement(Icon_1.default, { name: "users" }),
            "\u00A0Friends")) })); })
    .add('Mana', function () {
    var _a;
    return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, manaBalances: (_a = {}, _a[schemas_1.Network.ETHEREUM] = 1000, _a) }));
})
    .add('Mana L2', function () {
    var _a;
    return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, manaBalances: (_a = {}, _a[schemas_1.Network.ETHEREUM] = 1000, _a[schemas_1.Network.MATIC] = 2500, _a) }));
})
    .add('Activity', function () {
    var _a;
    return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onClickSettings: function () { return undefined; }, onClickActivity: function () { return undefined; }, manaBalances: (_a = {}, _a[schemas_1.Network.ETHEREUM] = 1000, _a[schemas_1.Network.MATIC] = 2500, _a), menuItems: React.createElement(React.Fragment, null,
            React.createElement(MenuItem_1.default, null,
                React.createElement(Icon_1.default, { name: "users" }),
                "\u00A0Friends")) }));
})
    .add('Activity pending', function () {
    var _a;
    return (React.createElement(UserMenu_1.UserMenu, { isSignedIn: true, avatar: avatar_1.avatar, onClickSettings: function () { return undefined; }, onClickActivity: function () { return undefined; }, manaBalances: (_a = {}, _a[schemas_1.Network.ETHEREUM] = 1000, _a[schemas_1.Network.MATIC] = 2500, _a), hasActivity: true, menuItems: React.createElement(React.Fragment, null,
            React.createElement(MenuItem_1.default, null,
                React.createElement(Icon_1.default, { name: "users" }),
                "\u00A0Friends")) }));
});
