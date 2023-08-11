import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { RutinaComponent } from './components/rutina/rutina.component';
import { PlanesComponent } from './components/planes/planes.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    RutinaComponent,
    PlanesComponent,
    EjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
