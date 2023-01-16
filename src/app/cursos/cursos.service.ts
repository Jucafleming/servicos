
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosServices{
    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    private cursos:string[] = ['aaaaaaa', 'bbbbbbb']

    getCursos(){
        return this.cursos
    }
    constructor(){
        console.log('CursosServices')
    }

    addCurso(curso:string){
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosServices.criouNovoCurso.emit(curso)
    }
}