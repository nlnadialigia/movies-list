import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesServices: FilmesService
  ) { }

  ngOnInit() {
    this.filmesServices.listar().subscribe((filmes: Filme[]) => this.filmes = filmes)
  }



}
