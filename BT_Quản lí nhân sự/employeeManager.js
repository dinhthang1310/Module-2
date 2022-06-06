"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (employee) {
        this.employeeList.push(employee);
    };
    EmployeeManager.showList = function () {
        return this.employeeList;
    };
    EmployeeManager["delete"] = function (index) {
        this.employeeList.splice(index, 1);
    };
    EmployeeManager.employeeList = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
