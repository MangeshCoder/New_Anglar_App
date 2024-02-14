import { Component } from "@angular/core";
@Component({
    selector:'app-root',
    templateUrl:'Pipe.html'
})
export class PipeClass{

    //inbuilt pipe example
    fname:any="sagar";
    lname:any="JADHAV";
    p:any=0.25;
    R:any=2563;
    dt=new Date();
    data:any=[{"rno":1,"name":'mangesh'},{"rno":2,"name":'rahul'}];

    //custom pipe example
    mynum:any="";
    
    num:any="";
    s:any="";
}