
import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../log.service";

@Injectable()
export class CursosServices{
    
    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    private cursos:string[] = ['aaaaaaa', 'bbbbbbb']

    getCursos(){
        this.logService.ConsoleLog('Obtendo Lista de Cursos')
        return this.cursos
    }
    constructor(private logService: LogService){
        console.log('CursosServices')
    }

    addCurso(curso:string){
        this.logService.ConsoleLog(`criando um novo curso ${curso}`)
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosServices.criouNovoCurso.emit(curso)
    }
}