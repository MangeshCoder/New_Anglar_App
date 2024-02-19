import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'app-root',
    template:`
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
            <table class="table">
            <tr>
                <td>user name</td>
                <td><input type="text" [(ngModel)]="user" class="form-control"></td>
            </tr>
            <tr>
                <td>password</td>
                <td><input type="password" [(ngModel)]="pass"  class="form-control"></td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="login" (click)="checkData(user,pass)" class="btn btn-primary">
                </td>
            </tr>
          </table>
          <h4 style="color:red">{{msg}}</h4>
            </div>
        </div>
    </div>
         
    
    `
})
export class LoginClass{
    user:any;
    pass:any;
    msg:any;
    constructor(private rt:Router){}
    checkData(u:any,p:any){

        if(u=='ciit' && p==1234){
            this.rt.navigateByUrl("/main");
        }
        else{
            this.msg="Invalid username and password";
        }
    }
}