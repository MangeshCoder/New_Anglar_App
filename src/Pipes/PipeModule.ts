import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PipeClass } from "./PipeComponent";
import { cubeClass } from "./CubePipe";
import { powerClass } from "./PowerPipe";

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[PipeClass,cubeClass,powerClass],
    bootstrap:[PipeClass]
})

export class ModuleClass{

}