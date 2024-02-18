import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MainClass } from "./MainComponent";
import { HomeClass } from "./HomeComponent";
import { AboutClass } from "./AboutComponent";
import { ContactClass } from "./ContactComponent";
import { ServiceClass } from "./ServiceComponent";
import { StaffClass } from "./StaffComponent";
import { CompanyClass } from "./CompanyComponent";
import { GaurdServiceClass } from "./GaurdService";
import { RouterModule } from "@angular/router";
import { LoginClass } from "./LoginComponent";
import { ChildGaurdClass } from "./ChildGuardService";
import { CommonClass } from "./CommonComponent";

const myroutes:any=[
{path:'',component:LoginClass},
{path:'main',component:MainClass,children:[
    {path:'home',component:HomeClass,canActivate:[GaurdServiceClass]},
    {path:'about',component:AboutClass,canActivateChild:[ChildGaurdClass], 
    children:[{path:'staff',component:StaffClass},
    {path:'company',component:CompanyClass}]
    },
    {path:'Contact/:id',component:ContactClass},
    {path:'Service/:pid/:pname',component:ServiceClass}
   ]
}
];

@NgModule({
    imports:[BrowserModule,FormsModule,RouterModule.forRoot(myroutes)],
    declarations:[MainClass,HomeClass,AboutClass,ContactClass,ServiceClass,StaffClass,CompanyClass,LoginClass,CommonClass],
    bootstrap:[CommonClass],
    providers:[GaurdServiceClass,ChildGaurdClass]
})
export class ModuleClass{

}