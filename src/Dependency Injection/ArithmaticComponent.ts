import { Component } from "@angular/core";
import { Operation } from "./ArithmaticService";
@Component({
    selector:'app-root',
    templateUrl:'Arithmatic.html'
})

export class ArithmaticClass{

    num1:any;
    num2:any;

    addResult:any="";
    subResult:any="";
    mulResult:any="";
    divResult:any="";

    constructor(private op:Operation){}
    Calculate(a:any,b:any){
        this.addResult="Addition ="+this.op.Addition(a,b);
        this.subResult="Subtraction ="+this.op.Subtraction(a,b);
        this.mulResult="Multiplication ="+this.op.Multiplication(a,b);
        this.divResult="Division ="+this.op.Division(a,b);
    }
}