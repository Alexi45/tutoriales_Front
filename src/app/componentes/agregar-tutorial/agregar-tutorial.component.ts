import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/modelos/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-agregar-tutorial',
  templateUrl: './agregar-tutorial.component.html',
  styleUrls: ['./agregar-tutorial.component.css']
})
export class AgregarTutorialComponent implements OnInit {

  tutorial={
  titulo: '',
  descripcion: '',
  publicado: false};
  submitted = false


  constructor(private tutorialService: TutorialService, private router: Router) { }

  ngOnInit(): void {
  }
  guardarTutorial(): void {
    const data= {
    titulo: this.tutorial.titulo,
    descripcion: this.tutorial.descripcion};
    this.tutorialService.create(data).subscribe({next: (res) => {
    console.log(res);
    this.submitted= true;},
    error: (
    e) => console.error(e)});}

    nuevoTutorial(): void {
    this.submitted= false;
    this.tutorial= {
    titulo: '',
    descripcion: '',
    publicado: false};
    }

  volver(): void{
    this.router.navigate(['/', "tutoriales"]);
  }
  }

