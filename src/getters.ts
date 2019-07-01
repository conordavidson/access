import { Known, UnknownAccessorFunction, FallbackCallback } from './types';
import {
  StringGuard,
  NumberGuard,
  BooleanGuard,
  StringArrayGuard,
  NumberArrayGuard,
  BooleanArrayGuard,
  StringMapGuard,
  NumberMapGuard,
  BooleanMapGuard,
  TypeGuard,
} from './typeGuards';
import { createPropertyUndefinedException, createPropertyTypeMismatchException, createPropertyMissingException } from './errors';

function getWithGuard<ObjectToAccess extends Known, ReturnType>(
  guard: TypeGuard,
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => ReturnType,
  fallback: ReturnType,
  fallbackCallback?: FallbackCallback,
): ReturnType;
function getWithGuard<ObjectToAccess extends unknown, ReturnType>(
  guard: TypeGuard,
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: ReturnType,
  fallbackCallback?: FallbackCallback,
): ReturnType;
function getWithGuard(guard, object, accessorFunction, fallback, fallbackCallback) {
  try {
    const result = accessorFunction(object);
    if (result === undefined) throw createPropertyUndefinedException(object, accessorFunction, fallback);
    if (guard.check(fallback) && guard.check(result)) return result;
    throw createPropertyTypeMismatchException(guard.type, object, accessorFunction, fallback);
  } catch (error) {
    if (fallbackCallback && error instanceof TypeError) {
      fallbackCallback(createPropertyMissingException(object, accessorFunction, fallback));
    } else if (fallbackCallback) {
      fallbackCallback(error);
    }
    return fallback;
  }
}

export function getString<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => string,
  fallback: string,
  fallbackCallback?: FallbackCallback,
): string;
export function getString<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: string,
  fallbackCallback?: FallbackCallback,
): string;
export function getString(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(StringGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getNumber<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => number,
  fallback: number,
  fallbackCallback?: FallbackCallback,
): number;
export function getNumber<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: number,
  fallbackCallback?: FallbackCallback,
): number;
export function getNumber(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(NumberGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getBoolean<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => boolean,
  fallback: boolean,
  fallbackCallback?: FallbackCallback,
): boolean;
export function getBoolean<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: boolean,
  fallbackCallback?: FallbackCallback,
): boolean;
export function getBoolean(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(BooleanGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getStringArray<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => string[],
  fallback: string[],
  fallbackCallback?: FallbackCallback,
): string[];
export function getStringArray<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: string[],
  fallbackCallback?: FallbackCallback,
): string[];
export function getStringArray(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(StringArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getNumberArray<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => number[],
  fallback: number[],
  fallbackCallback?: FallbackCallback,
): number[];
export function getNumberArray<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: number[],
  fallbackCallback?: FallbackCallback,
): number[];
export function getNumberArray(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(NumberArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getBooleanArray<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => boolean[],
  fallback: boolean[],
  fallbackCallback?: FallbackCallback,
): boolean[];
export function getBooleanArray<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: boolean[],
  fallbackCallback?: FallbackCallback,
): boolean[];
export function getBooleanArray(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(BooleanArrayGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getStringMap<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => { [key: string]: string },
  fallback: { [key: string]: string },
  fallbackCallback?: FallbackCallback,
): { [key: string]: string };
export function getStringMap<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: { [key: string]: string },
  fallbackCallback?: FallbackCallback,
): { [key: string]: string };
export function getStringMap(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(StringMapGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getNumberMap<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => { [key: string]: number },
  fallback: { [key: string]: number },
  fallbackCallback?: FallbackCallback,
): { [key: string]: number };
export function getNumberMap<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: { [key: string]: number },
  fallbackCallback?: FallbackCallback,
): { [key: string]: number };
export function getNumberMap(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(NumberMapGuard, object, accessorFunction, fallback, fallbackCallback);
}

export function getBooleanMap<ObjectToAccess extends Known>(
  object: ObjectToAccess,
  accessorFunction: (object: ObjectToAccess) => { [key: string]: boolean },
  fallback: { [key: string]: boolean },
  fallbackCallback?: FallbackCallback,
): { [key: string]: boolean };
export function getBooleanMap<ObjectToAccess>(
  object: unknown,
  accessorFn: UnknownAccessorFunction,
  fallback: { [key: string]: boolean },
  fallbackCallback?: FallbackCallback,
): { [key: string]: boolean };
export function getBooleanMap(object, accessorFunction, fallback, fallbackCallback) {
  return getWithGuard(BooleanMapGuard, object, accessorFunction, fallback, fallbackCallback);
}
