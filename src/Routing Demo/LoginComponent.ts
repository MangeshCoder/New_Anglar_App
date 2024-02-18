import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'app-root',
    template:`
          <table>
            <tr>
                <td>user name</td>
                <td><input type="text" [(ngModel)]="user"></td>
            </tr>
            <tr>
                <td>password</td>
                <td><input type="password" [(ngModel)]="pass"></td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="login" (click)="checkData(user,pass)">
                </td>
            </tr>
          </table>
          <h4 style="color:red">{{msg}}</h4>
    
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