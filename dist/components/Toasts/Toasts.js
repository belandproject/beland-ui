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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toasts = void 0;
var React = require("react");
require("./Toasts.css");
var Toasts = /** @class */ (function (_super) {
    __extends(Toasts, _super);
    function Toasts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toasts.prototype.render = function () {
        var _a = this.props, _b = _a.position, position = _b === void 0 ? 'top right' : _b, children = _a.children;
        var className = __spreadArray(['dcl', 'toasts'], position.split(' '), true);
        return React.createElement("div", { className: className.join(' ') }, children);
    };
    return Toasts;
}(React.PureComponent));
exports.Toasts = Toasts;
