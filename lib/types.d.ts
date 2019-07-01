import { getString, getNumber, getBoolean, getNull, getStringArray, getNumberArray, getBooleanArray, getNullArray, getStringMap, getNumberMap, getBooleanMap, getNullMap } from './getters';
export declare type Known = object | number | string | boolean | null | number[] | string[] | boolean[] | null[];
export declare type UnknownAccessorFunction = (object: any) => unknown;
export declare type FallbackCallback = (error: Error) => void;
export interface Guarantee {
    getString: typeof getString;
    getNumber: typeof getNumber;
    getBoolean: typeof getBoolean;
    getNull: typeof getNull;
    getStringArray: typeof getStringArray;
    getNumberArray: typeof getNumberArray;
    getBooleanArray: typeof getBooleanArray;
    getNullArray: typeof getNullArray;
    getStringMap: typeof getStringMap;
    getNumberMap: typeof getNumberMap;
    getBooleanMap: typeof getBooleanMap;
    getNullMap: typeof getNullMap;
}
