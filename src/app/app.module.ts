import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { AddUserEventsComponent } from './add-user-events/add-user-events.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { LoginViewComponent } from './login-view/login-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuViewComponent,
    AddUserEventsComponent,
    ResultViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
