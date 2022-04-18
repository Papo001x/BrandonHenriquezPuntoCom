import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
