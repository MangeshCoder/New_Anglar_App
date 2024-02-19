import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'app-root',
    template: `
              <h2>Home page</h2>
              <table>
                <tr>
                    <td>Product id</td>
                    <td><input type="text" [(ngModel)]="product_id"></td>
                </tr>
                <tr>
                    <td>Product name</td>
                    <td><input type="text" [(ngModel)]="product_name"></td>
                </tr>
                <tr>
                    <td>
                        <input type="button" value="submit" (click)="submitData(product_id,product_name)">
                    </td>
                </tr>
              </table>
    `
})
export class HomeClass{
    product_id:any;
    product_name:any;
    constructor(private rt:Router){}
    submitData(id:any,name:any){
        console.log(id);
        console.log(name);
        this.rt.navigateByUrl("/main/service/"+id+"/"+name);
    }
}
