import {Employee} from "./employee";

export class EmployeeManager {
  static  employeeList : Employee[]  = [];
    constructor() {
    }
    static add(employee) {
        this.employeeList.push(employee)
    }
   static showList() {
        return this.employeeList
    }
    static delete(index:number) {
        this.employeeList.splice(index,1);
    }
}