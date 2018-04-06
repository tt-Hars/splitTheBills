import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { AddUserEventsComponent } from './add-user-events/add-user-events.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { AddUserEventsModule } from './add-user-events/add-user-events.module';
import { FormsModule } from '@angular/forms';
import { UserNameTbSharedComponent } from './shared/user-name-tb-shared.component';
/*
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
*/
@NgModule({
  declarations: [
    AppComponent,
    MenuViewComponent,
    AddUserEventsComponent,
    ResultViewComponent,
    LoginViewComponent,
    UserNameTbSharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AddUserEventsModule,
/*
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
