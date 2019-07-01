/*
function isString(obj: any): obj is string {
    return !!obj && typeof obj === "string";
}

function isNumber(obj: any): obj is number {
    return !!obj && typeof obj === "number";
}

function isBoolean(obj: any): obj is boolean {
    return !!obj && typeof obj === "boolean";
}

function isNull(obj: any): obj is null {
    return !!obj && typeof obj === null;
}

function isNumberArray(obj: any): obj is number[] {
    return !!obj && typeof Array.isArray(obj) && (obj as Array<any>).every(isNumber);
}

function isStringArray(obj: any): obj is string[] {
    return !!obj && typeof Array.isArray(obj) && (obj as Array<any>).every(isString);
}

function isBooleanArray(obj: any): obj is string[] {
    return !!obj && typeof Array.isArray(obj) && (obj as Array<any>).every(isBoolean);
}

function isNullArray(obj: any): obj is string[] {
    return !!obj && typeof Array.isArray(obj) && (obj as Array<any>).every(isNull);
}

type KnownAccessorFunction<ObjectToAccess, ReturnType> = (object: ObjectToAccess) => ReturnType;
type UnknownAccessorFunction = (object: any) => unknown;
type Callback = () => void;

function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends number>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): number;
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends string>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): string;
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends boolean>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): boolean;
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends null>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): null;
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends number[]>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): number[];
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends string[]>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): string[];
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends boolean[]>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): boolean[];
function guarantee<ObjectToAccess extends object | number | string | boolean | null | number[] | string[] | boolean[] | null[], ReturnType extends null[]>(object: ObjectToAccess, accessorFn: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): null[];
function guarantee<ObjectToAccess, ReturnType extends number>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): number;
function guarantee<ObjectToAccess, ReturnType extends string>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): string;
function guarantee<ObjectToAccess, ReturnType extends boolean>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): boolean;
function guarantee<ObjectToAccess, ReturnType extends null>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): null;
function guarantee<ObjectToAccess, ReturnType extends number[]>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): number[];
function guarantee<ObjectToAccess, ReturnType extends string[]>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): string[];
function guarantee<ObjectToAccess, ReturnType extends boolean[]>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): boolean[];
function guarantee<ObjectToAccess, ReturnType extends null[]>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): null[];

function guarantee(object, accessorFn, fallback, fallbackCallback) {
    try {
        const result = accessorFn(object);
        if (result === undefined) {
            if (fallbackCallback) fallbackCallback();
            return fallback;
        }
        if (isNumber(fallback) && isNumber(result)) return result;
        if (isString(fallback) && isString(result)) return result;
        if (isBoolean(fallback) && isBoolean(result)) return result;
        if (isNull(fallback) && isNull(result)) return result;
        if (isStringArray(fallback) && isStringArray(result)) return result;
        if (isNumberArray(fallback) && isNumberArray(result)) return result;
        if (isBooleanArray(fallback) && isBooleanArray(result)) return result;
        if (isNullArray(fallback) && isNullArray(result)) return result;
        
        if (fallbackCallback) fallbackCallback();
        return fallback;
    }
    catch (e) {
        return fallback;
    }
}

function guaranteeFactory(fallbackCallback) {
    return (object, accessorFn, fallback) => guarantee(object, accessorFn, fallback, fallbackCallback);
}

const d = guaranteeFactory(() => console.log('yea'));

const testU: unknown = {
    name: {
        first: {
            thing: 'yea'
        }
    }
}

const testK = {
    name: {
        first: {
            thing: 'yea'
        }
    }
}

const one = guarantee(testK, u => u.name.first.thing, 2);
const two = guarantee(testU, u => u.names.first.thing, 200);

function createUndefinedError(object: unknown, accessorFunction: Function, fallback: unknown) {
    return new Error(`Accessing object (${JSON.stringify(object)}) with accessor (${accessorFunction.toString()}) resulted in undefined. Fell back to ${fallback}`);
}

function createTypeMismatchError(expectedType: string, object: unknown, accessorFunction: Function, fallback: unknown) {
    return new Error(`Accessing object (${JSON.stringify(object)}) with accessor (${accessorFunction.toString()}) resulted in undefined. Fell back to ${fallback}`);
}

type Known = object | number | string | boolean | null | number[] | string[] | boolean[] | null[];
function getString<ObjectToAccess extends Known, ReturnType extends string>(object: ObjectToAccess, accessorFunction: KnownAccessorFunction<ObjectToAccess, ReturnType>, fallback: ReturnType, fallbackCallback?: Callback): string;
function getString<ObjectToAccess extends unknown, ReturnType extends string>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: ReturnType, fallbackCallback?: Callback): string;

function getString(object, accessorFunction, fallback, fallbackCallback) {
    try {
        const result = accessorFunction(object);
        if (result === undefined) {
            if (fallbackCallback) fallbackCallback(createUndefinedError(object, accessorFunction, fallback));
            return fallback;
        }
        if (isString(fallback) && isString(result)) return result;
        if (fallbackCallback) fallbackCallback(createTypeMismatchError("string", object, accessorFunction, fallback));
        return fallback;
    }
    catch (e) {
        return fallback;
    }
}

const u: unknown = {
    name: {
        first: {
            thing: 'yea'
        }
    }
}

const k = {
    name: {
        first: {
            thing: 2
        }
    }
}

const test1 = getString(k, _ => _.name.first.thing, 'test');
*/ 
//# sourceMappingURL=generic.js.map