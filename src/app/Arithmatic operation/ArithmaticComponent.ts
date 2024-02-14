import { Component } from "@angular/core";
@Component({
    selector:'app-root',
    templateUrl:'Arithmatic.html'
})
export class arithmaticClass{
    num1:any="";
    num2:any="";
    addresult:any="";
    subresult:any="";
    mulresult:any="";
    divresult:any="";
    eng:any="";
    math:any="";
    sci:any="";
    txtttl:any="";
    txtper:any="";
    txtres:any="";

    Addition(a:any,b:any){
       this.addresult=Number(a)+Number(b);
    }
    Subtraction(a:any,b:any){
        this.subresult=Number(a)-Number(b);
     }
     Multiplication(a:any,b:any){
        this.mulresult=Number(a)*Number(b);
     }
     Division(a:any,b:any){
        this.divresult=Number(a)/Number(b);
     }

     Calculate(e:any,m:any,s:any){
        this.txtttl=Number(e)+Number(m)+Number(s);
        this.txtper=(this.txtttl/3).toFixed(2);
        if(this.txtper>=40){
            this.txtres="pass";
        }
        else{
            this.txtres="fail";
        }
     }
   
}