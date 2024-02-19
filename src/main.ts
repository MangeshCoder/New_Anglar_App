import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import { ModuleClass } from './Project/ProjectModule';
//import { ModuleClass } from './BindingDemo/BindingModule';
//import { ModuleClass } from './app/Arithmatic operation/ArithmaticModule';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { ModuleClass } from './studentTask/studentModule';
//import { ModuleClass } from './Dependency Injection/ArithmaticModule';
//import { ModuleClass } from './Pipes/PipeModule';
// import { ModuleClass } from './Routing In Angular/MainModule';
// import { ModuleClass } from './Routing Demo/MainModule';
// import { ModuleClass } from './LoginTask/MainModule';
// import { ModuleClass } from './Lazy Loading/MainModule';
// import { ModuleClass } from './Angular Forms/MainModule';
import { ModuleClass } from './Student Form/MainModule';

platformBrowserDynamic().bootstrapModule(ModuleClass)
.catch((err)=>console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
