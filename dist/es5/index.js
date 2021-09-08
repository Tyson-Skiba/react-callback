"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CallbackWrapper = function (_a) {
    var callback = _a.callback, children = _a.children;
    return callback
        ? (0, jsx_runtime_1.jsx)("div", __assign({ ref: callback }, { children: children }), void 0)
        : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
};
exports.CallbackWrapper = CallbackWrapper;
