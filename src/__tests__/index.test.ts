import guarantee from '../index';

describe('guarantee', () => {
  it('should call the fallback callback when prop doesnt exist', () => {
    const fallbackCallbackMock = jest.fn();
    const { getString: getStr } = guarantee(fallbackCallbackMock);

    const testShape: unknown = {
      test: {
        this: {
          one: 999,
          too: 'nada',
        },
      },
    };

    getStr(testShape, obj => obj.prop.doesnt.exist, 'fallback');
    expect(fallbackCallbackMock).toBeCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('PropertyMissingException'),
      }),
    );
  });

  it('should call the fallback callback when prop undefined', () => {
    const fallbackCallbackMock = jest.fn();
    const { getString: getStr } = guarantee(fallbackCallbackMock);

    const testShape: unknown = {
      test: {
        this: {
          one: 999,
          too: 'nada',
        },
      },
    };

    getStr(testShape, obj => obj.test.this.three, 'fallback');
    expect(fallbackCallbackMock).toBeCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('PropertyUndefinedException'),
      }),
    );
  });

  it('should call the fallback callback when type mismatch', () => {
    const fallbackCallbackMock = jest.fn();
    const { getString: getStr } = guarantee(fallbackCallbackMock);

    const testShape: unknown = {
      test: {
        this: {
          one: 999,
          too: 'nada',
        },
      },
    };

    getStr(testShape, obj => obj.test.this.one, 'fallback');
    expect(fallbackCallbackMock).toBeCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('PropertyTypeMismatchException'),
      }),
    );
  });

  it('should not call the fallback callback when get successful', () => {
    const fallbackCallbackMock = jest.fn();
    const { getString: getStr } = guarantee(fallbackCallbackMock);

    const testShape: unknown = {
      test: {
        this: {
          one: 999,
          too: 'nada',
        },
      },
    };

    getStr(testShape, obj => obj.test.this.too, 'fallback');
    expect(fallbackCallbackMock).not.toBeCalled();
  });
});
