import { Component } from '@angular/core';
import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServices],
})
export class CursosComponent {

  cursos: string[] = []
   //cursosServices: CursosServices

  constructor(private cursosServices: CursosServices){
    //this.cursosServices = new CursosServices()
   // this.cursosServices = _cursosServices
  }
  ngOnInit(){
    this.cursos = this.cursosServices.getCursos()

    CursosServices.criouNovoCurso.subscribe(
      // function(curso){
      //   console.log(curso)
      // }
      curso => this.cursos.push(curso)
    )
  }
}
