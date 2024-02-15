import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable()
export class GaurdClass implements CanActivate{
    canActivate():any{
        return false;
    }
}