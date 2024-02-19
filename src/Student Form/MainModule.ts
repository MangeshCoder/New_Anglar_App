import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentClass } from "./StudentComponent";

@NgModule({
    imports:[BrowserModule,ReactiveFormsModule],
    declarations:[StudentClass],
    bootstrap:[StudentClass]
})
export class ModuleClass{

}