import { NgModule } from "@angular/core";
import { StudentClass } from "./StudentComponent";
import { AdmissionClass } from "./AdmissionComponent";
import { ExamClass } from "./ExamComponent";
import { RouterModule } from "@angular/router";

const myrouts:any=[
    {path:'',component:StudentClass},
    {path:'admission',component:AdmissionClass},
    {path:'exam',component:ExamClass}
]

@NgModule({
    imports:[RouterModule.forChild(myrouts)],
    declarations:[StudentClass,AdmissionClass,ExamClass]
})
export class StudentModuleClass{

}