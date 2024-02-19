import { NgModule } from "@angular/core";
import { TeacherClass } from "./TeacherComponent";
import { ProfileClass } from "./ProfileComponent";
import { SalaryClass } from "./SalaryComponent";
import { RouterModule } from "@angular/router";

const myrouts:any=[
    {path:'',component:TeacherClass},
    {path:'profile',component:ProfileClass},
    {path:'salary',component:SalaryClass}
];

@NgModule({
    imports:[RouterModule.forChild(myrouts)],
    declarations:[TeacherClass,ProfileClass,SalaryClass]
})
export class TeacherModuleClass{
    
}