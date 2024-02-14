import { Component } from "@angular/core";
import { SstudentModel } from "./studentModel";

@Component({
    selector:'app-root',
    templateUrl:'student.html'
})

export class studentClass{

   s= new SstudentModel("","","","","","","","","");
   student:any=[];
   index:any=-1;
   btnstatus:any=false;

   Calculate(e:any,m:any,s:any){
    this.s.total=Number(e)+Number(m)+Number(s);
    this.s.percentage=(this.s.total/3).toFixed(2);
    if(this.s.percentage>=40){
        this.s.result="pass"
        this.s.color="green"
    }
    else{
        this.s.result="fail";
        this.s.color="red";
    }
   }
   Add(p:any){
    this.student.push(p);
    alert("student added successfully");
    this.clear();
   }

   update(p:any){
    this.student[this.index]=p;
    this.btnstatus=false;
    alert("student updated successfully");
    this.clear();
   }

   ViewStudent(p:any,i:any){
    this.index=i;
    this.btnstatus=true;
    this.s=new SstudentModel(p.rno,p.name,p.english,p.math,p.science,p.total,p.percentage,p.result,"");
   }

   DeleteStudent(i:any){
    this.student.splice(i,1);
    alert("student delted successfully");
   }
   clear(){
    this.s= new SstudentModel("","","","","","","","","");
    this.index=-1;
   }
}
