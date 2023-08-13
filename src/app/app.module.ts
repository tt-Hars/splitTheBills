import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PreLoginModule } from "./pre-login/pre-login.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PreLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
