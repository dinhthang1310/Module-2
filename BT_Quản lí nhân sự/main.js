"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var employeeManager_1 = require("./employeeManager");
var employee1 = new employee_1.Employee("Tran", "Thang", "20-10-2000", "ha loi", "student");
var employee2 = new employee_1.Employee("Nguyen", "Kien", "12-3-2001", "nam dinh", "student");
var employee3 = new employee_1.Employee("Hoang", "Dinh", "09-11-2002", "ha nam", "student");
employeeManager_1.EmployeeManager.add(employee1);
employeeManager_1.EmployeeManager.add(employee2);
employeeManager_1.EmployeeManager.add(employee3);
employeeManager_1.EmployeeManager["delete"](1);
console.table(employeeManager_1.EmployeeManager.showList());
