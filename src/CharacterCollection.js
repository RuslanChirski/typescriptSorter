"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    ;
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    ;
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split('');
        _a = [characters[rightIndex], characters[leftIndex]], characters[leftIndex] = _a[0], characters[rightIndex] = _a[1];
        this.data = characters.join('');
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
