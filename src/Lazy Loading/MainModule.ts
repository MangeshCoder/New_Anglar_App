import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MainClass } from "./MainComponent";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const myrouts:any=[
    {path:'student',loadChildren:()=>import("./Student/StudentModule").then(e=>e.StudentModuleClass)},
    {path:'teacher',loadChildren:()=>import("./Teacher/TeacherModule").then(e=>e.TeacherModuleClass)}
]

@NgModule({
    imports:[BrowserModule,FormsModule,RouterModule.forRoot(myrouts)],
    declarations:[MainClass],
    bootstrap:[MainClass]
})
export class ModuleClass{
    
}