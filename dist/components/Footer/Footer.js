"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var React = require("react");
var Container_1 = require("../Container/Container");
require("./Footer.css");
var Logo_1 = require("../Logo/Logo");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, i18n = _a.i18n, isFullscreen = _a.isFullscreen, className = _a.className;
        var classes = 'dcl footer';
        if (isFullscreen) {
            classes += ' fullscreen';
        }
        if (className) {
            classes += ' ' + className;
        }
        return (React.createElement(Container_1.Container, { className: classes },
            React.createElement("div", { className: "main-footer" },
                React.createElement("div", null,
                    React.createElement("a", { className: "dcl navbar-logo", href: "https://beland.io" },
                        React.createElement(Logo_1.Logo, null)),
                    React.createElement("div", { className: 'des' }, i18n.content.description)),
                React.createElement("div", { className: "links" },
                    React.createElement("div", { className: 'items' },
                        React.createElement("div", { className: 'title' }, i18n.title.about),
                        React.createElement("a", { href: i18n.links.home.link }, i18n.links.home.text),
                        React.createElement("a", { href: i18n.links.market.link }, i18n.links.market.text),
                        React.createElement("a", { href: i18n.links.builder.link }, i18n.links.builder.text),
                        React.createElement("a", { href: i18n.links.roadmap.link }, i18n.links.roadmap.text)),
                    React.createElement("div", { className: 'items' },
                        React.createElement("div", { className: 'title' }, i18n.title.developers),
                        React.createElement("a", { href: i18n.links.testnet.link }, i18n.links.testnet.text),
                        React.createElement("a", { href: i18n.links.github.link }, i18n.links.github.text),
                        React.createElement("a", { href: i18n.links.docs.link }, i18n.links.docs.text),
                        React.createElement("a", { href: i18n.links.dao.link }, i18n.links.dao.text)),
                    React.createElement("div", { className: 'items' },
                        React.createElement("div", { className: 'title' }, i18n.title.media),
                        React.createElement("a", { href: i18n.links.blog.link }, i18n.links.blog.text),
                        React.createElement("a", { href: i18n.links.event.link }, i18n.links.event.text)))),
            React.createElement("div", { className: 'divider' }),
            React.createElement("div", { className: 'copyright' }, i18n.content.copyright)));
    };
    Footer.defaultProps = {
        i18n: {
            content: {
                description: 'Beland is a legal entity representing an association of people, whether natural legal.',
                copyright: '©Copyright 2022. Beland. All Rights Reserved'
            },
            title: {
                about: 'About',
                developers: 'Developers',
                media: 'Media'
            },
            links: {
                home: {
                    text: 'Home',
                    link: 'https://beland.io'
                },
                market: {
                    text: 'Market',
                    link: 'https://beland.io'
                },
                builder: {
                    text: 'Builder',
                    link: 'https://beland.io'
                },
                roadmap: {
                    text: 'Roadmap',
                    link: 'https://beland.io'
                },
                testnet: {
                    text: 'Testnet',
                    link: 'https://beland.io'
                },
                github: {
                    text: 'Github',
                    link: 'https://beland.io'
                },
                docs: {
                    text: 'Documentation',
                    link: 'https://beland.io'
                },
                dao: {
                    text: 'Dao',
                    link: 'https://beland.io'
                },
                blog: {
                    text: 'Blog',
                    link: 'https://beland.io'
                },
                event: {
                    text: 'Event',
                    link: 'https://beland.io'
                }
            }
        }
    };
    return Footer;
}(React.PureComponent));
exports.Footer = Footer;
