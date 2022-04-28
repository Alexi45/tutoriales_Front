import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTutorialComponent } from './componentes/agregar-tutorial/agregar-tutorial.component';
import { TutorialDetallesComponent } from './componentes/tutorial-detalles/tutorial-detalles.component';
import { ListaTutorialesComponent } from './componentes/lista-tutoriales/lista-tutoriales.component';
import { HttpClientModule } from '@angular/common/http';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarTutorialComponent,
    TutorialDetallesComponent,
    ListaTutorialesComponent,
    Pagina404Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
