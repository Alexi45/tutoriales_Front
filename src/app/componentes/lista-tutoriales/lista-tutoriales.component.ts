import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/modelos/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-lista-tutoriales',
  templateUrl: './lista-tutoriales.component.html',
  styleUrls: ['./lista-tutoriales.component.css']
})
export class ListaTutorialesComponent implements OnInit {
  tutoriales?: Tutorial[];
  tutorialActual: Tutorial = {};
  indiceActual = -
  1
  ;
  titulo = ''
  ;
  constructor
  (private tutorialService: TutorialService) { }
  ngOnInit(): void {
  this.recuperarTutoriales();
  }
  recuperarTutoriales(): void {
  this.tutorialService.getAll()
  .subscribe({
  next: (data) => {
  this.tutoriales = data
  ;
  console.log
  (data);
  },
  error: (
  e) => console.error
  (
  e
  )
  });
  }
  refrescarLista(): void {
  this.recuperarTutoriales();
  this.tutorialActual = {};
  this.indiceActual = -
  1
  ;
  }
  setTutorialActivo
  (tutorial: Tutorial, indice: number): void {
  this.tutorialActual = tutorial
  ;
  this.indiceActual = indice
  ;
  }
  eliminarTodosTutoriales(): void {
  this.tutorialService.deleteAll()
  .subscribe({
  next: (res) => {
  console.log
  (res);
  this.refrescarLista();
  },
  error: (
  e) => console.error
  (
  e
  )
  });
  }
  buscarTitulo(): void {
  this.tutorialActual = {};
  this.indiceActual = -
  1
  ;
  this.tutorialService.findByTitulo
  (this.titulo)
  .subscribe({
  next: (data) => {
  this.tutoriales = data
  ;
  console.log
  (data);
  },
  error: (
  e) => console.error
  (
  e
  )
  });
  }}
