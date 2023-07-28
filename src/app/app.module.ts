import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { FormsModule } from '@angular/forms';
import { ObjectComponent } from './object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnonceComponent,
    EmpruntComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
