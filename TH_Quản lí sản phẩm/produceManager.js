"use strict";
exports.__esModule = true;
exports.ProduceManager = void 0;
var ProduceManager = /** @class */ (function () {
    function ProduceManager() {
        this.listProduce = [];
    }
    ProduceManager.prototype.add = function (produce) {
        this.listProduce.push(produce);
    };
    ProduceManager.prototype.showList = function () {
        return this.listProduce;
    };
    return ProduceManager;
}());
exports.ProduceManager = ProduceManager;
