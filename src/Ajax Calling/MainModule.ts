import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EmployeeClass } from "./EmployeeComponent";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeOperation } from "./EmployeeService";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[BrowserModule,HttpClientModule,FormsModule],
    declarations:[EmployeeClass],
    bootstrap:[EmployeeClass],
    providers:[EmployeeOperation]
})
export class ModuleClass{

}