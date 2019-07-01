import { Known, UnknownAccessorFunction, FallbackCallback } from './types';
export declare function getString<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => string, fallback: string, fallbackCallback?: FallbackCallback): string;
export declare function getString<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: string, fallbackCallback?: FallbackCallback): string;
export declare function getNumber<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => number, fallback: number, fallbackCallback?: FallbackCallback): number;
export declare function getNumber<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: number, fallbackCallback?: FallbackCallback): number;
export declare function getBoolean<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => boolean, fallback: boolean, fallbackCallback?: FallbackCallback): boolean;
export declare function getBoolean<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: boolean, fallbackCallback?: FallbackCallback): boolean;
export declare function getNull<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => null, fallback: null, fallbackCallback?: FallbackCallback): null;
export declare function getNull<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: null, fallbackCallback?: FallbackCallback): null;
export declare function getStringArray<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => string[], fallback: string[], fallbackCallback?: FallbackCallback): string[];
export declare function getStringArray<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: string[], fallbackCallback?: FallbackCallback): string[];
export declare function getNumberArray<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => number[], fallback: number[], fallbackCallback?: FallbackCallback): number[];
export declare function getNumberArray<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: number[], fallbackCallback?: FallbackCallback): number[];
export declare function getBooleanArray<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => boolean[], fallback: boolean[], fallbackCallback?: FallbackCallback): boolean[];
export declare function getBooleanArray<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: boolean[], fallbackCallback?: FallbackCallback): boolean[];
export declare function getNullArray<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => null[], fallback: null[], fallbackCallback?: FallbackCallback): null[];
export declare function getNullArray<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: null[], fallbackCallback?: FallbackCallback): null[];
export declare function getStringMap<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => {
    [key: string]: string;
}, fallback: {
    [key: string]: string;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: string;
};
export declare function getStringMap<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: {
    [key: string]: string;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: string;
};
export declare function getNumberMap<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => {
    [key: string]: number;
}, fallback: {
    [key: string]: number;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: number;
};
export declare function getNumberMap<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: {
    [key: string]: number;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: number;
};
export declare function getBooleanMap<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => {
    [key: string]: boolean;
}, fallback: {
    [key: string]: boolean;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: boolean;
};
export declare function getBooleanMap<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: {
    [key: string]: boolean;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: boolean;
};
export declare function getNullMap<ObjectToAccess extends Known>(object: ObjectToAccess, accessorFunction: (object: ObjectToAccess) => {
    [key: string]: null;
}, fallback: {
    [key: string]: null;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: null;
};
export declare function getNullMap<ObjectToAccess>(object: unknown, accessorFn: UnknownAccessorFunction, fallback: {
    [key: string]: null;
}, fallbackCallback?: FallbackCallback): {
    [key: string]: null;
};
