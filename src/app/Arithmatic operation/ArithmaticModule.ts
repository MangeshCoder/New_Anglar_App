import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { arithmaticClass } from "./ArithmaticComponent";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[arithmaticClass],
    bootstrap:[arithmaticClass]
})
export class ModuleClass{
    
}