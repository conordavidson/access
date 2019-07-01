import guarantee from '../index';

const {
  getString,
  getNumber,
  getBoolean,
  getStringArray,
  getNumberArray,
  getBooleanArray,
  getStringMap,
  getNumberMap,
  getBooleanMap,
} = guarantee();

describe('getString', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: 'yes',
        too: 2,
      },
    },
  };

  it('should return nested string when found', () => {
    const value = getString(testShape, obj => obj.test.this.one, 'fallback');
    expect(value).toBe('yes');
  });

  it('should return fallback string when not found', () => {
    const value = getString(testShape, obj => obj.this.is.not.here, 'fallback');
    expect(value).toBe('fallback');
  });

  it('should return fallback string when type mismatch', () => {
    const value = getString(testShape, obj => obj.test.this.too, 'fallback');
    expect(value).toBe('fallback');
  });

  it('should return fallback string when type mismatch', () => {
    const value = getString(testShape, obj => obj, 'fallback');
    expect(value).toBe('fallback');
  });
});

describe('getNumber', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: 999,
        too: 'nada',
      },
    },
  };

  it('should return nested number when found', () => {
    const value = getNumber(testShape, obj => obj.test.this.one, 101);
    expect(value).toBe(999);
  });

  it('should return fallback number when not found', () => {
    const value = getNumber(testShape, obj => obj.this.is.not.here, 101);
    expect(value).toBe(101);
  });

  it('should return fallback number when type mismatch', () => {
    const value = getNumber(testShape, obj => obj.test.this.too, 101);
    expect(value).toBe(101);
  });

  it('should return fallback number when type mismatch', () => {
    const value = getNumber(testShape, obj => obj, 101);
    expect(value).toBe(101);
  });
});

describe('getBoolean', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: true,
        too: 'nada',
      },
    },
  };

  it('should return nested boolean when found', () => {
    const value = getBoolean(testShape, obj => obj.test.this.one, false);
    expect(value).toBe(true);
  });

  it('should return fallback boolean when not found', () => {
    const value = getBoolean(testShape, obj => obj.this.is.not.here, false);
    expect(value).toBe(false);
  });

  it('should return fallback number when type mismatch', () => {
    const value = getBoolean(testShape, obj => obj.test.this.too, false);
    expect(value).toBe(false);
  });

  it('should return fallback number when type mismatch', () => {
    const value = getBoolean(testShape, obj => obj, false);
    expect(value).toBe(false);
  });
});

describe('getStringArray', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: ['this', 'better', 'work'],
        too: 'nada',
      },
    },
  };

  it('should return nested string array when found', () => {
    const value = getStringArray(testShape, obj => obj.test.this.one, []);
    expect(value).toStrictEqual(['this', 'better', 'work']);
  });

  it('should return fallback string array when not found', () => {
    const value = getStringArray(testShape, obj => obj.this.is.not.here, ['test']);
    expect(value).toStrictEqual(['test']);
  });

  it('should return fallback string array when type mismatch', () => {
    const value = getStringArray(testShape, obj => obj.test.this.too, []);
    expect(value).toStrictEqual([]);
  });

  it('should return fallback string array when type mismatch', () => {
    const value = getStringArray(testShape, obj => obj, []);
    expect(value).toStrictEqual([]);
  });
});

describe('getNumberArray', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: [1, 2, 3],
        too: 4,
      },
    },
  };

  it('should return nested number array when found', () => {
    const value = getNumberArray(testShape, obj => obj.test.this.one, []);
    expect(value).toStrictEqual([1, 2, 3]);
  });

  it('should return fallback number array when not found', () => {
    const value = getNumberArray(testShape, obj => obj.this.is.not.here, [999]);
    expect(value).toStrictEqual([999]);
  });

  it('should return fallback number array when type mismatch', () => {
    const value = getNumberArray(testShape, obj => obj.test.this.too, []);
    expect(value).toStrictEqual([]);
  });

  it('should return fallback number array when type mismatch', () => {
    const value = getNumberArray(testShape, obj => obj, []);
    expect(value).toStrictEqual([]);
  });
});

describe('getBooleanArray', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: [false, true, false],
        too: true,
      },
    },
  };

  it('should return nested boolean array when found', () => {
    const value = getBooleanArray(testShape, obj => obj.test.this.one, []);
    expect(value).toStrictEqual([false, true, false]);
  });

  it('should return fallback boolean array when not found', () => {
    const value = getBooleanArray(testShape, obj => obj.this.is.not.here, [true]);
    expect(value).toStrictEqual([true]);
  });

  it('should return fallback boolean array when type mismatch', () => {
    const value = getBooleanArray(testShape, obj => obj.test.this.too, []);
    expect(value).toStrictEqual([]);
  });

  it('should return fallback boolean array when type mismatch', () => {
    const value = getBooleanArray(testShape, obj => obj, []);
    expect(value).toStrictEqual([]);
  });
});

describe('getStringMap', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: { one: 'please', two: 'test', three: 'me' },
        too: true,
      },
    },
  };

  it('should return nested string map when found', () => {
    const value = getStringMap(testShape, obj => obj.test.this.one, {});
    expect(value).toStrictEqual({ one: 'please', two: 'test', three: 'me' });
  });

  it('should return fallback string map when not found', () => {
    const value = getStringMap(testShape, obj => obj.this.is.not.here, { fallback: 'returned' });
    expect(value).toStrictEqual({ fallback: 'returned' });
  });

  it('should return fallback string map when type mismatch', () => {
    const value = getStringMap(testShape, obj => obj.test.this.too, {});
    expect(value).toStrictEqual({});
  });

  it('should return fallback string map when type mismatch', () => {
    const value = getStringMap(testShape, obj => obj, {});
    expect(value).toStrictEqual({});
  });
});

describe('getNumberMap', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: { one: 1, two: 2, three: 3 },
        too: true,
      },
    },
  };

  it('should return nested number map when found', () => {
    const value = getNumberMap(testShape, obj => obj.test.this.one, {});
    expect(value).toStrictEqual({ one: 1, two: 2, three: 3 });
  });

  it('should return fallback number map when not found', () => {
    const value = getNumberMap(testShape, obj => obj.this.is.not.here, { fallback: 999 });
    expect(value).toStrictEqual({ fallback: 999 });
  });

  it('should return fallback number map when type mismatch', () => {
    const value = getNumberMap(testShape, obj => obj.test.this.too, {});
    expect(value).toStrictEqual({});
  });

  it('should return fallback number map when type mismatch', () => {
    const value = getNumberMap(testShape, obj => obj, {});
    expect(value).toStrictEqual({});
  });
});

describe('getBooleanMap', () => {
  const testShape: unknown = {
    test: {
      this: {
        one: { one: true, two: false, three: true },
        too: true,
      },
    },
  };

  it('should return nested boolean map when found', () => {
    const value = getBooleanMap(testShape, obj => obj.test.this.one, {});
    expect(value).toStrictEqual({ one: true, two: false, three: true });
  });

  it('should return fallback boolean map when not found', () => {
    const value = getBooleanMap(testShape, obj => obj.this.is.not.here, { fallback: true });
    expect(value).toStrictEqual({ fallback: true });
  });

  it('should return fallback boolean map when type mismatch', () => {
    const value = getBooleanMap(testShape, obj => obj.test.this.too, {});
    expect(value).toStrictEqual({});
  });

  it('should return fallback boolean map when type mismatch', () => {
    const value = getBooleanMap(testShape, obj => obj, {});
    expect(value).toStrictEqual({});
  });
});
