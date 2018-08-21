import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry } from "@angular/material";

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
    BrowserAnimationsModule,
    ProfileModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
