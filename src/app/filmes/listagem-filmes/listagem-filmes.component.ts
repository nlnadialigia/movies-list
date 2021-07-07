import { Component, OnInit } from '@angular/core';
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

  constructor(
    private filmesServices: FilmesService
  ) { }

  ngOnInit(): void {
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
