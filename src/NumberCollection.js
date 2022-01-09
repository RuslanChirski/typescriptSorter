"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    // Длинный конструктор
    // data: number[];
    //
    // constructor(data: number[]) {
    //     this.data = data;
    // }
    // Сокращенный коструктор
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    ;
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [this.data[rightIndex], this.data[leftIndex]], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
