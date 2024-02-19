import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EmployeeClass } from "./EmployeeComponent";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,ReactiveFormsModule],
    declarations:[EmployeeClass],
    bootstrap:[EmployeeClass]
})
export class ModuleClass{

}