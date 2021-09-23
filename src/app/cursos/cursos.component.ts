import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  /* Create a new instance */
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  /* Método 1 com injeção de dependência */
  //cursosService: CursosService;

  constructor(
    /* Método 1 com injeção de dependência */
    //_cursosService: CursosService

    /* Método 2 com injeção de dependência */
    private cursosService: CursosService
  ) {
    /* Sem injeção de dependência */
    //this.cursosService = new CursosService();

    /* Método 1 com injeção de dependência */
    //this.cursosService = _cursosService;
  }

  ngOnInit():void {
    this.cursos = this.cursosService.getCursos();
  }

}
