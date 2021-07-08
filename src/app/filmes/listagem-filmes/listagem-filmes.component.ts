import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  pagina = 0
  readonly qtdePagina = 4
  filmes: Filme[] = []
  generos: Array<string>
  filtrosListagem: FormGroup
  texto: string
  genero: string

  constructor(
    private filmesServices: FilmesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    })

    this.filtrosListagem.get('texto').valueChanges.subscribe(
      (val:string) => {
        this.texto = val
        this.resetarConsulta()
      }
    )

    this.filtrosListagem.get('genero').valueChanges.subscribe(
      (val:string) => {
        this.genero = val
        this.resetarConsulta()
      }
    )

    this.generos = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

    this.listarFilmes()
  }

  private resetarConsulta():void {
    this.pagina = 0
    this.filmes = []
    this.listarFilmes()
  }

  onScroll(): void {
    this.listarFilmes()
  }

  private listarFilmes(): void {
    this.pagina++
    this.filmesServices.listar(this.pagina, this.qtdePagina, this.texto, this.genero)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
  }
}
