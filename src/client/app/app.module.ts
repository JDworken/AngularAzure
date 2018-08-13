import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileModule } from "./profile/profile.module";
import { AppRoutingModule } from './app-routing.module';
import { RouteComponent } from "./route.component";
@NgModule({
  declarations: [
    AppComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
