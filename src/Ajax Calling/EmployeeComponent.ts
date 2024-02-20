import { Component } from "@angular/core";
import { EmployeeOperation } from "./EmployeeService";
import { Employee } from "./EmployeeModel";
@Component({
    selector:'app-root',
    templateUrl:'Employee.html'
})
export class EmployeeClass{

    employees:any;
    e=new Employee("","","","","","");
    msg:any="";
    msg2:any="";
    index:any=-1;
    constructor(private eop:EmployeeOperation){
        this.GetEmployess();
    }
    GetEmployess(){
        this.eop.GetEmployees().subscribe(e=>{
            console.log(e);
            this.employees=e;
        })
    }
    AddEmployee(emp:any){
        this.eop.AddEmployee(emp).subscribe(e=>{
            alert("employee added successfully");
            this.msg=e;
            this.e=new Employee("","","","","","");

        })
    }
    UpdateEmployee(p:any){
      this.employees[this.index]=p;
      alert("employee update successfully");
      this.e=new Employee("","","","","","");
    }
    ViewEmployee(p:any,i:any){
        this.index=i;
        this.e=new Employee(p.employee_id,p.employee_name,p.designation,p.salary,p.email_address,p.mobile_number);
    }
    DeleteEmployee(i:any){
        this.employees.splice(i,1);
        alert("employee deleted successfully");
    }
}