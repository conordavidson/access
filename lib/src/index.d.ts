import { Guarantee, FallbackCallback } from './types';
import { getString, getNumber, getBoolean, getNull, getStringArray, getNumberArray, getBooleanArray, getNullArray } from './getters';
export { getString, getNumber, getBoolean, getNull, getStringArray, getNumberArray, getBooleanArray, getNullArray };
export default function guaranteeFactory(fallbackCallback?: FallbackCallback): Guarantee;
