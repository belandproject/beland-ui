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
exports.SmartIcon = void 0;
var React = require("react");
require("./SmartIcon.css");
var SmartIcon = /** @class */ (function (_super) {
    __extends(SmartIcon, _super);
    function SmartIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartIcon.prototype.render = function () {
        var className = this.props.className;
        return React.createElement("div", { className: "dcl smart-icon ".concat(className).trim() });
    };
    SmartIcon.defaultProps = {
        className: ''
    };
    return SmartIcon;
}(React.PureComponent));
exports.SmartIcon = SmartIcon;
