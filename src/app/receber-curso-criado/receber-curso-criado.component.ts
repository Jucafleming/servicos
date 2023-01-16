import { Component } from '@angular/core';
import { CursosServices } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent {

  curso:string =''
  constructor(private cursosService: CursosServices ){

  }

  ngOnInit(){
    

    this.cursosService.emitirCursoCriado.subscribe(
      // function(curso){
      //   console.log(curso)
      // }
      cursoCriado=>this.curso = cursoCriado
    )
  }

}
