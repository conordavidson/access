# Access

[![codecov](https://codecov.io/gh/conordavidson/guarantee/branch/master/graph/badge.svg)](https://codecov.io/gh/conordavidson/guarantee)

#### Get deeply nested properties from unknown shapes with at-runtime type safety.

Access allows you to get values in `unknown` or `any` types and be assured you will get the correct type out. If the value is missing, undefined, or the incorrect type, the given fallback is returned instead. This is achieved with at-runtime type checking. A global callback can also be registered to be called anytime a fallback is returned.

## Installation

###### yarn

```
yarn add access
```

###### npm

```
npm install access
```

## Example

```ts
import { getString, getNumber } from 'access';

const apiResponse: unknown = {
  data: {
    user: {
      address: {
        state: 'MA',
      },
    },
  },
};

getString(apiResponse, x => x.data.user.address.state, 'state not found'); // "MA"
getString(apiResponse, x => x.missing.key, 'fallback'); // fallback
getNumber(apiResponse, x => x.data.user.address.state, 999); // 999
```

---

## API

#### `getString`

```ts
getString<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType), fallback: string, callback?: (e: Error) => void): string
```

#### `getNumber`

```ts
getNumber<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: number, callback?: (e: Error) => void): number
```

#### `getBoolean`

```ts
getBoolean<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: boolean, callback?: (e: Error) => void): boolean
```

#### `getStringArray`

```ts
getStringArray<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: string[], callback?: (e: Error) => void): string[]
```

#### `getNumberArray`

```ts
getNumberArray<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: number[], callback?: (e: Error) => void): number[]
```

#### `getBooleanArray`

```ts
getBooleanArray<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: boolean[], callback?: (e: Error) => void): boolean[]
```

#### `getStringMap`

```ts
getStringMap<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: { [key: string]: string }, callback?: (e: Error) => void): { [key: string]: string }
```

#### `getNumberMap`

```ts
getNumberMap<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: { [key: string]: number }, callback?: (e: Error) => void): { [key: string]: number }
```

#### `getBooleanMap`

```ts
getBooleanMap<ObjectType, ReturnType>(obj: ObjectType, accessor: (obj: ObjectType) => ReturnType, fallback: { [key: string]: boolean }, callback?: (e: Error) => void): { [key: string]: boolean }
```

---

## Configuration

A callback can be registered with the default `access` export. This callback will be called anytime a fallback is returned.

A typical usecase for this is to send a message to some error tracking software signaling that a CMS or some other remote server is no longer returning data in a shape that we expected. See the example below:

#### Configuration Example

#### `getter.ts`

```ts
import access from 'access';

const {
  getString,
  getNumber,
  getBoolean,
  getStringArray,
  getNumberArray,
  getBooleanArray,
  getStringMap,
  getNumberArray,
  getBooleanMap,
} = access(error => {
  ErrorTracker.send('ui.fallback.returned', error);
});

export { getString, getNumber, getBoolean, getStringArray, getNumberArray, getBooleanArray, getStringMap, getNumberArray, getBooleanMap };
```

#### `example.ts`

```ts
import { getString, getNumber } from './getter.ts';

const apiResponse: unknown = {
  data: {
    players: {
      1: {
        userName: 'player one',
      },
    },
  },
};

getString(apiResponse, x => x.missing.key, 'fallback text'); // "fallback text"
// error ('ui.fallback.returned', PropertyMissingException...) was sent to ErrorTracker
```

---

## Related Projects

[`ts-get`](https://github.com/RIP21/ts-get) and [`idx`](https://github.com/facebookincubator/idx) share the same goals and API as this one. The biggest difference is that this library works against `unknown` types, whereas the others require the accessed object to be explicitly typed with optional types. Neither library does runtime checking to prevent against type mismatches either.

## FAQ

#### Why not use a generic type signature?

The library was originally implemented as one generic `get` function. It looked something like:

```ts
function access<ObjectType, ReturnType extends number>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): number;
function access<ObjectType, ReturnType extends string>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): string;
function access<ObjectType, ReturnType extends boolean>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): boolean;
function access<ObjectType, ReturnType extends number[]>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): number[];
function access<ObjectType, ReturnType extends string[]>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): string[];
function access<ObjectType, ReturnType extends boolean[]>(
  obj: ObjectType,
  accessor: (obj: ObjectType) => ReturnType,
  fallback: ReturnType,
): boolean[];
function access(object, accessorFn, fallback, fallbackCallback) {
  try {
    const result = accessor(object);
    if (isNumber(fallback) && isNumber(result)) return result;
    if (isString(fallback) && isString(result)) return result;
    if (isBoolean(fallback) && isBoolean(result)) return result;
    if (isNumberArray(fallback) && isNumberArray(result)) return result;
    if (isStringArray(fallback) && isStringArray(result)) return result;
    if (isBooleanArray(fallback) && isBooleanArray(result)) return result;
  } catch (e) {
    return fallback;
  }
}
```

This generic implementation — while having a much smaller surface area — had large performance implications, especially when dealing with arrays and maps. Due to the nature of the runtime typechecking, the fallback and return value had to be checked against all possible return types to be able to infer which type to return. Therefor multiple (more specific) methods were chosen over this simpler syntax.
