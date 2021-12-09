import React, { useCallback } from "react";
import { useToast } from "@chakra-ui/react";
import { Toast } from "../components";
// hehe
export var useChakraToast = function (_a) {
    var _b = _a === void 0 ? { defaultDuration: 2500 } : _a, defaultDuration = _b.defaultDuration;
    var toast = useToast();
    return useCallback(function (options) {
        var _a = options.status, status = _a === void 0 ? "default" : _a, title = options.title, message = options.message, _b = options.duration, duration = _b === void 0 ? defaultDuration : _b;
        setTimeout(function () {
            return toast({
                duration: duration,
                render: function () { return React.createElement(Toast, { status: status, title: title, message: message }); },
            });
        }, 250);
    }, []);
};
export default useChakraToast;
