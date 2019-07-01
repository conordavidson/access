export interface TypeGuard {
  type: string;
  check: (object: any) => boolean;
}

export const StringGuard: TypeGuard = {
  type: 'string',
  check: isString,
};

export const NumberGuard: TypeGuard = {
  type: 'number',
  check: isNumber,
};

export const BooleanGuard: TypeGuard = {
  type: 'boolean',
  check: isBoolean,
};

export const StringArrayGuard: TypeGuard = {
  type: 'stringArray',
  check: isStringArray,
};

export const NumberArrayGuard: TypeGuard = {
  type: 'numberArray',
  check: isNumberArray,
};

export const BooleanArrayGuard: TypeGuard = {
  type: 'booleanArray',
  check: isBooleanArray,
};

export const StringMapGuard: TypeGuard = {
  type: 'stringMap',
  check: isStringMap,
};

export const NumberMapGuard: TypeGuard = {
  type: 'numberMap',
  check: isNumberMap,
};

export const BooleanMapGuard: TypeGuard = {
  type: 'booleanMap',
  check: isBooleanMap,
};

function isString(obj: any): obj is string {
  return typeof obj === 'string';
}

function isNumber(obj: any): obj is number {
  return typeof obj === 'number';
}

function isBoolean(obj: any): obj is boolean {
  return typeof obj === 'boolean';
}

function isArray(obj: any): obj is any[] {
  return Array.isArray(obj);
}

function isObject(obj: any): obj is object {
  return typeof obj === 'object' && obj !== null;
}

function isStringArray(obj: any): obj is string[] {
  return isArray(obj) && obj.every(isString);
}

function isNumberArray(obj: any): obj is number[] {
  return isArray(obj) && obj.every(isNumber);
}

function isBooleanArray(obj: any): obj is string[] {
  return isArray(obj) && obj.every(isBoolean);
}

function isStringMap(obj: any): obj is { [key: string]: string } {
  return (
    isObject(obj) &&
    Object.keys(obj)
      .map(key => obj[key])
      .every(isString)
  );
}

function isNumberMap(obj: any): obj is { [key: string]: number } {
  return (
    isObject(obj) &&
    Object.keys(obj)
      .map(key => obj[key])
      .every(isNumber)
  );
}

function isBooleanMap(obj: any): obj is { [key: string]: boolean } {
  return (
    isObject(obj) &&
    Object.keys(obj)
      .map(key => obj[key])
      .every(isBoolean)
  );
}
