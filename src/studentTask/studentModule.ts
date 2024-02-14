import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { studentClass } from "./studentComponent";
import { NgModule } from "@angular/core";
import { SstudentModel } from "./studentModel";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[studentClass],
    bootstrap:[studentClass]
})
export class ModuleClass{

}