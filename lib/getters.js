"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeGuards_1 = require("./typeGuards");
var errors_1 = require("./errors");
function getWithGuard(guard, object, accessorFunction, fallback, fallbackCallback) {
    try {
        var result = accessorFunction(object);
        if (result === undefined) {
            if (fallbackCallback)
                fallbackCallback(errors_1.createUndefinedError(object, accessorFunction, fallback));
            return fallback;
        }
        if (guard.check(fallback) && guard.check(result))
            return result;
        if (fallbackCallback)
            fallbackCallback(errors_1.createTypeMismatchError(guard.type, object, accessorFunction, fallback));
        return fallback;
    }
    catch (e) {
        return fallback;
    }
}
function getString(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.StringGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getString = getString;
function getNumber(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NumberGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNumber = getNumber;
function getBoolean(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.BooleanGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getBoolean = getBoolean;
function getNull(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNull = getNull;
function getStringArray(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.StringArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getStringArray = getStringArray;
function getNumberArray(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NumberArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNumberArray = getNumberArray;
function getBooleanArray(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.BooleanArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getBooleanArray = getBooleanArray;
function getNullArray(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNullArray = getNullArray;
function getStringMap(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getStringMap = getStringMap;
function getNumberMap(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNumberMap = getNumberMap;
function getBooleanMap(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getBooleanMap = getBooleanMap;
function getNullMap(object, accessorFunction, fallback, fallbackCallback) {
    return getWithGuard(typeGuards_1.NullArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}
exports.getNullMap = getNullMap;
