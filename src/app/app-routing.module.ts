import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTutorialComponent } from './componentes/agregar-tutorial/agregar-tutorial.component';
import { ListaTutorialesComponent } from './componentes/lista-tutoriales/lista-tutoriales.component';
import { TutorialDetallesComponent } from './componentes/tutorial-detalles/tutorial-detalles.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
const routes: Routes = [
  { path: '', redirectTo: 'tutoriales', pathMatch: 'full' },
  { path: 'tutoriales', component: ListaTutorialesComponent },
  { path: 'tutoriales/:id', component: TutorialDetallesComponent },
  { path: 'agregar', component: AgregarTutorialComponent },
  { path: '**', component: Pagina404Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
