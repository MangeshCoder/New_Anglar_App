import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BindingClass } from "./BindingComponent";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[BindingClass],
    bootstrap:[BindingClass]
})
export class ModuleClass{

}