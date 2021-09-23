import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable()
export class CursosService {
  /* Depende da instância da classe para ser usado  */
  emitirCursoCriado = new EventEmitter<string>();
  /* Não depende da instância da classe para ser usado */
  static criouNovoCurso = new EventEmitter<string>();

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}
