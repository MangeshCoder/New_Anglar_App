import { Component } from "@angular/core";
@Component({
    selector:'app-root',
    template:`
          <h2>About page</h2>
          <div>
            <a routerLink="staff">About staff</a>
            &nbsp;
            <a routerLink="company">About company</a>
          </div>
          <hr>
              <router-outlet></router-outlet>
    
    `
})
export class AboutClass{
    
}