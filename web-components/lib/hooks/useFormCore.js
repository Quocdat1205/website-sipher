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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useCallback, useMemo, useReducer } from "react";
export var useFormCore = function (initialValues, options) {
    if (options === void 0) { options = {
        clearErrorOnValueChange: true,
    }; }
    var initialError = useMemo(function () { return Object.assign.apply(Object, __spreadArray([{}], Object.keys(initialValues).map(function (key) {
        var _a;
        return (_a = {}, _a[key] = "", _a);
    }), false)); }, []);
    // generate reducer base on initial value input
    var genReducer = function (initValues) {
        var reducer = function (state, action) {
            var _a;
            switch (action.type) {
                case "SET":
                    return __assign(__assign({}, state), (_a = {}, _a[action.field] = action.value, _a));
                case "INIT":
                    return action.payload;
                default:
                    return state;
            }
        };
        return [reducer, initValues];
    };
    var _a = useReducer.apply(void 0, genReducer(initialValues)), values = _a[0], dispatch = _a[1];
    var _b = useReducer.apply(void 0, genReducer(initialError)), errors = _b[0], dispatchError = _b[1];
    var setError = useCallback(function (field, value) { return dispatchError({ type: "SET", field: field, value: value }); }, [dispatchError]);
    var setValue = useCallback(function (field, value) {
        dispatch({ type: "SET", field: field, value: value });
        if (options.clearErrorOnValueChange)
            setError(field, "");
    }, [dispatch, setError, options.clearErrorOnValueChange]);
    var initForm = useCallback(function (payload) {
        if (payload === void 0) { payload = initialValues; }
        dispatch({ type: "INIT", payload: payload });
        dispatchError({ type: "INIT", payload: initialError });
    }, [dispatch, dispatchError, initialError]);
    return { values: values, setValue: setValue, initForm: initForm, errors: errors, setError: setError };
};
export default useFormCore;
