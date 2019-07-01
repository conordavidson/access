import {
  getString,
  getNumber,
  getBoolean,
  getStringArray,
  getNumberArray,
  getBooleanArray,
  getStringMap,
  getNumberMap,
  getBooleanMap,
} from './getters';

export type Known = object | number | string | boolean | null | number[] | string[] | boolean[] | null[];
export type UnknownAccessorFunction = (object: any) => unknown;
export type FallbackCallback = (error: Error) => void;

export interface Guarantee {
  getString: typeof getString;
  getNumber: typeof getNumber;
  getBoolean: typeof getBoolean;
  getStringArray: typeof getStringArray;
  getNumberArray: typeof getNumberArray;
  getBooleanArray: typeof getBooleanArray;
  getStringMap: typeof getStringMap;
  getNumberMap: typeof getNumberMap;
  getBooleanMap: typeof getBooleanMap;
}
