import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var onMount = function (element, callback) {
    if (callback)
        callback();
    if (element && element.parentElement)
        element.parentElement.removeChild(element);
};
export var CallbackWrapper = function (_a) {
    var callback = _a.callback, children = _a.children;
    return (_jsxs(_Fragment, { children: [children, _jsx("div", { ref: function (element) { return onMount(element, callback); }, style: { display: 'none' } }, void 0)] }, void 0));
};
