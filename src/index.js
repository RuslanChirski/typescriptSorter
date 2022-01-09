"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numberCollection = new NumberCollection_1.NumberCollection([4, -3, -16, 10]);
var characterCollection = new CharacterCollection_1.CharacterCollection('ZxYmba');
var sorter = new Sorter_1.Sorter(numberCollection);
var sorter1 = new Sorter_1.Sorter(characterCollection);
sorter.sort();
sorter1.sort();
console.log(sorter.collection);
console.log(sorter1.collection);