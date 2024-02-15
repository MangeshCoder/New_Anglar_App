import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector:'app-root',
    template:`<h2>Contact us page</h2>
              <h2>Id={{d.id}}</h2>
    
    `
})
export class ContactClass{
    d:any;
    constructor (private rt:ActivatedRoute){
        this.rt.params.subscribe(e=>{
            this.d=e;
        })
    }
}