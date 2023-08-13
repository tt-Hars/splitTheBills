import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PreLoginModule } from "./pre-login/pre-login.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PreLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
