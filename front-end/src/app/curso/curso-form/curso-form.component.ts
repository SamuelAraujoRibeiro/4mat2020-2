import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  title : string = 'Novo curso'

  curso : any = {} // Objeto vazio, nome da entidade no SINGULAR

  niveis : any = [
    { valor: 'Básico', descr: 'Básico'},
    { valor: 'Intermidiário', descr: 'Intermidiário'},
    { valor: 'Avançado', descr: 'Avançado'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form) {
    
  }

}
