import { Component } from "@angular/core";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
    selector:'app-root',
    templateUrl:'Employee.html'
})
export class EmployeeClass{

    empform:any;
    employeeData:any=[];
    constructor(private fb:FormBuilder){
        this.NewEmployeeForm();
    }
    NewEmployeeForm(){
        this.empform=this.fb.group({
            employee_id:[null,Validators.compose([Validators.required,Validators.min(1),Validators.max(1000)])],
            employee_name:[null,Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
            age:[null,Validators.compose([Validators.required,Validators.min(10),Validators.max(30)])],
            email_address:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(30)])]
        })
    }

    SubmitData(e:any){
        this.employeeData.push(e);
        this.NewEmployeeForm();
    }
}