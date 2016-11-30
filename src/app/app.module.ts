import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteModule } from '../route/route.module';
import { UIRouterModule, Ng2StateDeclaration } from 'ui-router-ng2';

import { Hello } from './hello/hello.component';
import { About } from './about/about.component';

let routes:Ng2StateDeclaration[] = [];
routes.push({name:'hello', url:'/hello', component: Hello});
routes.push({name:'about', url:'/about', component: About});


@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: routes, useHash: false})
  ],
  declarations: [
    AppComponent,
    Hello,
    About
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
