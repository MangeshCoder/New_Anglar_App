import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'app-root',
    template:`
    <table>
        <tr>
            <td>Username</td>
            <td><input type="text" [(ngModel)]="uname"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" [(ngModel)]="pass"></td>
        </tr>
        <tr>
            <td>
                <input type="button" value="Login" (click)="checkData(uname,pass)">
            </td>
        </tr>
    </table>
    <h4 style="color:red">{{msg}}</h4>
    `
})

export class LoginClass{
    uname:any;
    pass:any;
    msg:any;
    constructor(private rt:Router){}
    checkData(u:any,p:any){
        if(u=="ciit" && p==1234){
            this.rt.navigateByUrl("/main");
        }
        else{
            this.msg="Invalid username and password";
        }
    }
}