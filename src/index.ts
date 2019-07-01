import { Guarantee, FallbackCallback } from './types';
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

export { getString, getNumber, getBoolean, getStringArray, getNumberArray, getBooleanArray, getStringMap, getNumberMap, getBooleanMap };

export default function guaranteeFactory(fallbackCallback?: FallbackCallback): Guarantee;
export default function guaranteeFactory(fallbackCallback) {
  return {
    getString: (object, accessorFunction, fallback) => getString(object, accessorFunction, fallback, fallbackCallback),
    getNumber: (object, accessorFunction, fallback) => getNumber(object, accessorFunction, fallback, fallbackCallback),
    getBoolean: (object, accessorFunction, fallback) => getBoolean(object, accessorFunction, fallback, fallbackCallback),
    getStringArray: (object, accessorFunction, fallback) => getStringArray(object, accessorFunction, fallback, fallbackCallback),
    getNumberArray: (object, accessorFunction, fallback) => getNumberArray(object, accessorFunction, fallback, fallbackCallback),
    getBooleanArray: (object, accessorFunction, fallback) => getBooleanArray(object, accessorFunction, fallback, fallbackCallback),
    getStringMap: (object, accessorFunction, fallback) => getStringMap(object, accessorFunction, fallback, fallbackCallback),
    getNumberMap: (object, accessorFunction, fallback) => getNumberMap(object, accessorFunction, fallback, fallbackCallback),
    getBooleanMap: (object, accessorFunction, fallback) => getBooleanMap(object, accessorFunction, fallback, fallbackCallback),
  };
}
