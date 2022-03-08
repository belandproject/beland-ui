"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var provider_type_1 = require("@dcl/schemas/dist/dapps/provider-type");
var react_1 = require("@storybook/react");
var react_2 = require("@storybook/addon-centered/react");
var Loader_1 = require("./Loader");
var Grid_1 = require("semantic-ui-react/dist/commonjs/collections/Grid");
react_1.storiesOf('Loader', module)
    .addDecorator(react_2.default)
    .add('Main Loader', function () { return React.createElement(Loader_1.Loader, { active: true, size: "massive" }); })
    .add('Tiny Loader', function () { return React.createElement(Loader_1.Loader, { active: true, size: "mini" }); })
    .add('With Provider', function () { return (React.createElement(Grid_1.default, { stackable: true, container: true, centered: true },
    React.createElement(Grid_1.default.Row, null,
        React.createElement(Grid_1.default.Column, { tablet: 4 },
            React.createElement(Loader_1.Loader, { active: true, size: "massive", provider: provider_type_1.ProviderType.INJECTED })),
        React.createElement(Grid_1.default.Column, { tablet: 4 },
            React.createElement(Loader_1.Loader, { active: true, size: "massive", provider: provider_type_1.ProviderType.WALLET_CONNECT })),
        React.createElement(Grid_1.default.Column, { tablet: 4 },
            React.createElement(Loader_1.Loader, { active: true, size: "massive", provider: provider_type_1.ProviderType.FORTMATIC })),
        React.createElement(Grid_1.default.Column, { tablet: 4 },
            React.createElement(Loader_1.Loader, { active: true, size: "massive", provider: provider_type_1.ProviderType.WALLET_LINK }))))); });
