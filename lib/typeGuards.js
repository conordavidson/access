"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringGuard = {
    type: 'string',
    check: isString,
};
exports.NumberGuard = {
    type: 'number',
    check: isNumber,
};
exports.BooleanGuard = {
    type: 'boolean',
    check: isBoolean,
};
exports.NullGuard = {
    type: 'null',
    check: isNull,
};
exports.StringArrayGuard = {
    type: 'stringArray',
    check: isStringArray,
};
exports.NumberArrayGuard = {
    type: 'numberArray',
    check: isNumberArray,
};
exports.BooleanArrayGuard = {
    type: 'booleanArray',
    check: isBooleanArray,
};
exports.NullArrayGuard = {
    type: 'nullArray',
    check: isNullArray,
};
exports.StringMapGuard = {
    type: 'stringMap',
    check: isStringMap,
};
exports.NumberMapGuard = {
    type: 'numberMap',
    check: isNumberMap,
};
exports.BooleanMapGuard = {
    type: 'booleanMap',
    check: isBooleanMap,
};
exports.NullMapGuard = {
    type: 'nullMap',
    check: isNullMap,
};
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isNull(obj) {
    return typeof obj === null;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
function isStringArray(obj) {
    return isArray(obj) && obj.every(isString);
}
function isNumberArray(obj) {
    return isArray(obj) && obj.every(isNumber);
}
function isBooleanArray(obj) {
    return isArray(obj) && obj.every(isBoolean);
}
function isNullArray(obj) {
    return isArray(obj) && obj.every(isNull);
}
function isStringMap(obj) {
    return (isObject(obj) &&
        Object.keys(obj)
            .map(function (key) { return obj[key]; })
            .every(isString));
}
function isNumberMap(obj) {
    return (isObject(obj) &&
        Object.keys(obj)
            .map(function (key) { return obj[key]; })
            .every(isNumber));
}
function isBooleanMap(obj) {
    return (isObject(obj) &&
        Object.keys(obj)
            .map(function (key) { return obj[key]; })
            .every(isBoolean));
}
function isNullMap(obj) {
    return (isObject(obj) &&
        Object.keys(obj)
            .map(function (key) { return obj[key]; })
            .every(isNull));
}
