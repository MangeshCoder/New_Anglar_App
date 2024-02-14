import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ArithmaticClass } from "./ArithmaticComponent";
import { Operation } from "./ArithmaticService";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[ArithmaticClass],
    bootstrap:[ArithmaticClass],
    providers:[Operation]
})

export class ModuleClass{

}