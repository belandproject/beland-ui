"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WearablePreview = void 0;
/* eslint-disable  @typescript-eslint/no-empty-function */
var React = require("react");
require("./WearablePreview.css");
var WearablePreview = /** @class */ (function (_super) {
    __extends(WearablePreview, _super);
    function WearablePreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iframe = null;
        _this.getUrl = function () {
            var _a = _this.props, contractAddress = _a.contractAddress, tokenId = _a.tokenId, itemId = _a.itemId, profile = _a.profile, urns = _a.urns, skin = _a.skin, hair = _a.hair, eyes = _a.eyes, bodyShape = _a.bodyShape, emote = _a.emote, zoom = _a.zoom, camera = _a.camera, dev = _a.dev, baseUrl = _a.baseUrl;
            var contractParam = contractAddress ? "contract=" + contractAddress : '';
            var tokenParam = tokenId ? "token=" + tokenId : '';
            var itemParam = itemId ? "item=" + itemId : '';
            var profileParam = profile ? "profile=" + profile : '';
            var urnParams = urns && urns.length > 0 ? urns.map(function (urn) { return "urn=" + urn; }).join('&') : '';
            var skinParam = skin ? "skin=" + skin : '';
            var hairParam = hair ? "hair=" + hair : '';
            var eyesParam = eyes ? "eyes=" + eyes : '';
            var bodyShapeParam = bodyShape ? "bodyShape=" + bodyShape : '';
            var emoteParam = emote ? "emote=" + emote : '';
            var zoomParam = zoom ? "zoom=" + zoom : '';
            var cameraParam = camera ? "camera=" + camera : '';
            var envParam = dev ? "env=dev" : '';
            var url = baseUrl +
                '?' +
                [
                    contractParam,
                    tokenParam,
                    itemParam,
                    profileParam,
                    urnParams,
                    envParam,
                    skinParam,
                    hairParam,
                    eyesParam,
                    bodyShapeParam,
                    emoteParam,
                    zoomParam,
                    cameraParam
                ]
                    .filter(function (param) { return !!param; })
                    .join('&');
            return url;
        };
        _this.handleMessage = function (msgEvent) {
            var _a = _this.props, baseUrl = _a.baseUrl, onLoad = _a.onLoad, onError = _a.onError;
            var origin = msgEvent.origin;
            if (origin === baseUrl) {
                var event_1 = null;
                try {
                    event_1 = JSON.parse(msgEvent.data || msgEvent.message);
                }
                catch (error) {
                    console.error('Could not parse message event', msgEvent);
                    onError(new Error('Could not parse message event'));
                }
                if (event_1) {
                    switch (event_1.type) {
                        case 'load': {
                            onLoad();
                            break;
                        }
                        case 'error': {
                            onError(new Error(event_1.message));
                        }
                    }
                }
            }
        };
        _this.refIframe = function (iframe) {
            _this.iframe = iframe;
        };
        return _this;
    }
    WearablePreview.prototype.componentDidMount = function () {
        window.addEventListener('message', this.handleMessage, false);
    };
    WearablePreview.prototype.componentWillUnmount = function () {
        window.removeEventListener('message', this.handleMessage, false);
    };
    WearablePreview.prototype.render = function () {
        if (this.props.tokenId && this.props.itemId) {
            console.warn('You should NOT use `tokenId` and `itemId` props simultaneously');
        }
        return (React.createElement("iframe", { className: "WearablePreview", src: this.getUrl(), width: "100%", height: "100%", frameBorder: "0", ref: this.refIframe }));
    };
    WearablePreview.defaultProps = {
        dev: false,
        baseUrl: 'https://wearable-preview.decentraland.org',
        onLoad: function () { },
        onError: function () { }
    };
    return WearablePreview;
}(React.PureComponent));
exports.WearablePreview = WearablePreview;
