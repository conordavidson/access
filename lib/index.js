"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("./getters");
function guaranteeFactory(fallbackCallback) {
    return {
        getString: function (object, accessorFunction, fallback) { return getters_1.getString(object, accessorFunction, fallback, fallbackCallback); },
        getNumber: function (object, accessorFunction, fallback) { return getters_1.getNumber(object, accessorFunction, fallback, fallbackCallback); },
        getBoolean: function (object, accessorFunction, fallback) { return getters_1.getBoolean(object, accessorFunction, fallback, fallbackCallback); },
        getNull: function (object, accessorFunction, fallback) { return getters_1.getNull(object, accessorFunction, fallback, fallbackCallback); },
        getStringArray: function (object, accessorFunction, fallback) { return getters_1.getStringArray(object, accessorFunction, fallback, fallbackCallback); },
        getNumberArray: function (object, accessorFunction, fallback) { return getters_1.getNumberArray(object, accessorFunction, fallback, fallbackCallback); },
        getBooleanArray: function (object, accessorFunction, fallback) { return getters_1.getBooleanArray(object, accessorFunction, fallback, fallbackCallback); },
        getNullArray: function (object, accessorFunction, fallback) { return getters_1.getNullArray(object, accessorFunction, fallback, fallbackCallback); },
    };
}
exports.default = guaranteeFactory;
