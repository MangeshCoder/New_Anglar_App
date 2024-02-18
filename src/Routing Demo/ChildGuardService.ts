import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
export class ChildGaurdClass implements CanActivateChild{
    canActivateChild():any{
        return true;
    }   
}