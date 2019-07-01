"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUndefinedError(object, accessorFunction, fallback) {
    return new Error("Accessing object (" + JSON.stringify(object) + ") with accessor (" + accessorFunction.toString() + ") resulted in undefined. Fell back to " + fallback);
}
exports.createUndefinedError = createUndefinedError;
function createTypeMismatchError(expectedType, object, accessorFunction, fallback) {
    return new Error("Accessing object (" + JSON.stringify(object) + ") with accessor (" + accessorFunction.toString() + ") resulted in undefined. Expected type (" + expectedType + "). Fell back to " + fallback);
}
exports.createTypeMismatchError = createTypeMismatchError;
//# sourceMappingURL=errors.js.map