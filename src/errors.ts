export class PropertyUndefinedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PropertyUndefinedException';
  }
}
export class PropertyTypeMismatchException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PropertyTypeMismatchException';
  }
}
export class PropertyMissingException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PropertyMissingException';
  }
}

export function createPropertyUndefinedException(object: unknown, accessorFunction: Function, fallback: unknown) {
  return new PropertyUndefinedException(
    `Accessing object (${JSON.stringify(
      object,
    )}) with accessor (${accessorFunction.toString()}) resulted in undefined. Fell back to ${fallback}`,
  );
}

export function createPropertyTypeMismatchException(expectedType: string, object: unknown, accessorFunction: Function, fallback: unknown) {
  return new PropertyTypeMismatchException(
    `Accessing object (${JSON.stringify(
      object,
    )}) with accessor (${accessorFunction.toString()}) resulted in undefined. Expected type (${expectedType}). Fell back to ${fallback}`,
  );
}

export function createPropertyMissingException(object: unknown, accessorFunction: Function, fallback: unknown) {
  return new PropertyMissingException(
    `No property was found in object (${JSON.stringify(object)}) with accessor (${accessorFunction.toString()}). Fell back to ${fallback}`,
  );
}
