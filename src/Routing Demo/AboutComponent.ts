import { Component } from "@angular/core";
@Component({
    selector:'app-root',
    template:`<h2>About us page</h2>
              <div>
                <a routerLink="staff">About staff page</a>
                &nbsp;
                <a routerLink="company">About company page</a>
              </div>
              <hr>
              <router-outlet></router-outlet>
    
    `
})
export class AboutClass{
    
}