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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export var CallbackWrapper = function (_a) {
    var callback = _a.callback, children = _a.children;
    return callback
        ? _jsx("div", __assign({ ref: callback }, { children: children }), void 0)
        : _jsx(_Fragment, { children: children }, void 0);
};
