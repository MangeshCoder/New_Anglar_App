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
import { GaurdClass } from "./GaurdService";
import { ChildGaurdClass } from "./ChildGaurdService";
import { RouterLink, RouterModule } from "@angular/router";

const myrouts:any=[
    {path:'home',component:HomeClass,canActivate:[GaurdClass], },  //Route gaurd create in this path
    {path:'about',component:AboutClass,canActivateChild:[ChildGaurdClass], children:[
        {path:'staff',component:StaffClass},
        {path:'company',component:CompanyClass}
    ]},
    // Route parameter create in this path
    {path:'contact/:id',component:ContactClass},
    {path:'service/:pid/:pname',component:ServiceClass}
]

@NgModule({
    imports:[BrowserModule,FormsModule,RouterModule.forRoot(myrouts)],
    declarations:[MainClass,HomeClass,AboutClass,ContactClass,ServiceClass],
    bootstrap:[MainClass],
    providers:[GaurdClass,ChildGaurdClass]
})
export class ModuleClass{

}