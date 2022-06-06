"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fistName, lastName, birthdate, address, position) {
        this._fistName = fistName;
        this._lastName = lastName;
        this._birthdate = birthdate;
        this._address = address;
        this._position = position;
    }
    Employee.prototype.getFistName = function () {
        return this._fistName;
    };
    Employee.prototype.setFistName = function (value) {
        this._fistName = value;
    };
    Employee.prototype.getLastName = function () {
        return this._lastName;
    };
    Employee.prototype.setLastName = function (value) {
        this._lastName = value;
    };
    Employee.prototype.getBirthdate = function () {
        return this._birthdate;
    };
    Employee.prototype.setBirthdate = function (value) {
        this._birthdate = value;
    };
    Employee.prototype.getAddress = function () {
        return this._address;
    };
    Employee.prototype.setAddress = function (value) {
        this._address = value;
    };
    Employee.prototype.getPosition = function () {
        return this._position;
    };
    Employee.prototype.setPosition = function (value) {
        this._position = value;
    };
    return Employee;
}());
exports.Employee = Employee;
