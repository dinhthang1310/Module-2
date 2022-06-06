"use strict";
exports.__esModule = true;
exports.Produce = void 0;
var Produce = /** @class */ (function () {
    function Produce(name, price) {
        this._name = name;
        this._price = price;
    }
    Produce.prototype.getName = function () {
        return this._name;
    };
    Produce.prototype.setName = function (value) {
        this._name = value;
    };
    Produce.prototype.getPrice = function () {
        return this._price;
    };
    Produce.prototype.setPrice = function (value) {
        this._price = value;
    };
    return Produce;
}());
exports.Produce = Produce;
