import { Pipe,PipeTransform } from "@angular/core";
@Pipe({name:"Power"})

export class powerClass implements PipeTransform{
    transform(n:any,p:any) {
        var d=Math.pow(n,p);
        return d;
    }
}