import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:"Cube"})

export class cubeClass implements PipeTransform{

    transform(num:any):any {
        return num*num*num;
    }
}