"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var onMount = function (element, callback) {
    if (callback)
        callback();
    if (element && element.parentElement)
        element.parentElement.removeChild(element);
};
var CallbackWrapper = function (_a) {
    var callback = _a.callback, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children, (0, jsx_runtime_1.jsx)("div", { ref: function (element) { return onMount(element, callback); }, style: { display: 'none' } }, void 0)] }, void 0));
};
exports.CallbackWrapper = CallbackWrapper;
