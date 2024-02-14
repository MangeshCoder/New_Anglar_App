import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { projectClass } from "./ProjectComponents";
@NgModule({
    imports:[BrowserModule],
    declarations:[projectClass],
    bootstrap:[projectClass]
})
export class ModuleClass{
    
}