import {Employee} from "./employee";
import {EmployeeManager} from "./employeeManager";

let employee1 = new Employee("Tran","Thang","20-10-2000","ha loi","student")
let employee2 = new Employee("Nguyen","Kien","12-3-2001","nam dinh","student")
let employee3 = new Employee("Hoang","Dinh","09-11-2002","ha nam","student")

EmployeeManager.add(employee1)
EmployeeManager.add(employee2)
EmployeeManager.add(employee3)

EmployeeManager.delete(1)

console.table(EmployeeManager.showList());

