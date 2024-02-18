import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector:'app-root',
    template:`<h2>Services page</h2>
              <div>
                <h2>Product id : {{d.pid}}</h2>
                <h2>Product name : {{d.pname}}</h2>
              </div>
    
    `
})
export class ServiceClass{
    d:any;
    constructor(private rt:ActivatedRoute){
        this.rt.params.subscribe(e=>{
            this.d=e;
        })
    }
}