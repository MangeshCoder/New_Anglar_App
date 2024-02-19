import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MainClass } from "./MainComponent";
import { LoginClass } from "./LoginComponent";
import { CommonClass } from "./CommonComponent";
import { RouterModule } from "@angular/router";
import { HomeClass } from "./HomeComponent";
import { AboutClass } from "./AboutComponent";
import { ContactClass } from "./ContactComponent";
import { ServiceClass } from "./ServiceComponent";
import { StaffClass } from "./StaffComponent";
import { CompanyClass } from "./CompanyComponent";
import { GaurdClass } from "../Routing In Angular/GaurdService";

const myrots:any=[
    {path:'',component:LoginClass},
    {path:'main',component:MainClass,children:[
        {path:'home',component:HomeClass},
        {path:'about',component:AboutClass,children:[
            {path:'staff',component:StaffClass},
            {path:'company',component:CompanyClass}
        ]},
        {path:'contact/:id',component:ContactClass},
        {path:'service/:pid/:pname',component:ServiceClass}
    ]}
]

@NgModule({
    imports:[BrowserModule,FormsModule,RouterModule.forRoot(myrots)],
    declarations:[MainClass,LoginClass,CommonClass,HomeClass,AboutClass,ContactClass,ServiceClass,StaffClass,CompanyClass],
    bootstrap:[CommonClass],
    providers:[GaurdClass]
})
export class ModuleClass{

}