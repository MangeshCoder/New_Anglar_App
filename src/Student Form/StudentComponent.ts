import { Component } from "@angular/core";
import { FormBuilder,Validators } from "@angular/forms";
@Component({
    selector:'app-root',
    templateUrl:'Student.html'
})
export class StudentClass{

    studentform:any;
    AddStudent:any=[];
    constructor(private fb:FormBuilder){
        this.NewStudentForm();
    }

    NewStudentForm(){
        this.studentform=this.fb.group({
            student_id:[null,Validators.compose([Validators.required,Validators.min(1),Validators.max(1000)])],
            student_name:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(30)])],
            age:[null,Validators.compose([Validators.required,Validators.min(10),Validators.max(30)])],
            mobile:[null,Validators.compose([Validators.required,Validators.pattern("[0-9]{10}")])],
            email:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(30)])]
        })
    }
    SubmitData(e:any){
        this.AddStudent.push(e);
        this.NewStudentForm();
    }
}