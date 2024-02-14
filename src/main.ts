import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { ModuleClass } from './Project/ProjectModule';
//import { ModuleClass } from './BindingDemo/BindingModule';
//import { ModuleClass } from './app/Arithmatic operation/ArithmaticModule';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { ModuleClass } from './studentTask/studentModule';
//import { ModuleClass } from './Dependency Injection/ArithmaticModule';
import { ModuleClass } from './Pipes/PipeModule';

platformBrowserDynamic().bootstrapModule(ModuleClass)
.catch((err)=>console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
