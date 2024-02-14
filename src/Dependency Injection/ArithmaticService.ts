import { Injectable } from "@angular/core";

@Injectable()
export class Operation{

    Addition(a:any,b:any){
        var c=Number(a)+Number(b);
        return c;
    }
    Subtraction(a:any,b:any){
        var c=Number(a)-Number(b);
        return c;
    }
    Multiplication(a:any,b:any){
        var c=Number(a)*Number(b);
        return c;
    }
    Division(a:any,b:any){
        var c=Number(a)/Number(b);
        return c;
    }
}