import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() {
    console.log('CursosService')
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
