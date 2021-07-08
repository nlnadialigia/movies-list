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
  texto: Array<string>
  generos: Array<string>
  filtrosListagem: FormGroup

  constructor(
    private filmesServices: FilmesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    })

    this.generos = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror']

    this.listarFilmes()
  }

  onScroll(): void {
    this.listarFilmes()
  }

  private listarFilmes(): void {
    this.pagina++
    this.filmesServices.listar(this.pagina, this.qtdePagina)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
  }



}
