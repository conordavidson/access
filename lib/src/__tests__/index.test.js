"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('getString', function () {
    var testShape = {
        test: {
            this: {
                one: 'yes',
                too: 2,
            },
        },
    };
    it('should return nested string when found', function () {
        var value = index_1.getString(testShape, function (obj) { return obj.test.this.one; }, 'fallback');
        expect(value).toBe('yes');
    });
    it('should return fallback string when not found', function () {
        var value = index_1.getString(testShape, function (obj) { return obj.this.is.not.here; }, 'fallback');
        expect(value).toBe('fallback');
    });
    it('should return fallback string when type mismatch', function () {
        var value = index_1.getString(testShape, function (obj) { return obj.test.this.too; }, 'fallback');
        expect(value).toBe('fallback');
    });
    it('should return fallback string when type mismatch', function () {
        var value = index_1.getString(testShape, function (obj) { return obj; }, 'fallback');
        expect(value).toBe('fallback');
    });
});
describe('getNumber', function () {
    var testShape = {
        test: {
            this: {
                one: 999,
                too: 'nada',
            },
        },
    };
    it('should return nested number when found', function () {
        var value = index_1.getNumber(testShape, function (obj) { return obj.test.this.one; }, 101);
        expect(value).toBe(999);
    });
    it('should return fallback number when not found', function () {
        var value = index_1.getNumber(testShape, function (obj) { return obj.this.is.not.here; }, 101);
        expect(value).toBe(101);
    });
    it('should return fallback number when type mismatch', function () {
        var value = index_1.getNumber(testShape, function (obj) { return obj.test.this.too; }, 101);
        expect(value).toBe(101);
    });
    it('should return fallback number when type mismatch', function () {
        var value = index_1.getNumber(testShape, function (obj) { return obj; }, 101);
        expect(value).toBe(101);
    });
});
describe('guarantee', function () {
    var fallbackCallbackMock = jest.fn();
    var getStr = index_1.default(fallbackCallbackMock).getString;
    var testShape = {
        test: {
            this: {
                one: 999,
                too: 'nada',
            },
        },
    };
    getStr(testShape, function (obj) { return obj.prop.doesnt.exist; }, 'fallback');
    it('should call the fallback callback', function () {
        expect(fallbackCallbackMock).toBeCalled();
    });
});
//# sourceMappingURL=index.test.js.map