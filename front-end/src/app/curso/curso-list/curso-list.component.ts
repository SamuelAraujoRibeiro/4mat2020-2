import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  cursos: any = [] // Vetor vazio

  displayedColumns : string[] = ['nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir']

  constructor(
      private cursoSrv : CursoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.cursos = await this.cursoSrv.listar()
    console.log(this.cursos)
    console.log('teste')
  }

  async excluir(id : string) {
      if(confirm('Deseja realmente excluir este item?')) {
        try {
          // 1) Efetuar a exclusão
          await this.cursoSrv.excluir(id)
          // 2) Atualizar os dados da tabela
          this.ngOnInit()
          // 3) Dar um feedback de sucesso para o usuário
          this.snackBar.open('Item excluído com sucesso', 'Entendi', {
            duration: 5000 // 5 segundos
          })
        }
        catch(erro) {
          console.log(erro)
          // 4) Dar um feedback de erro para o usuário
          this.snackBar.open('ERRO: não foi possível excluir esse item.', 'Que pena!', {
            duration: 5000 // 5 segundos
          }) 
        }
      }
  }

}
