import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {

  filme: Filme
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg'


  constructor(
    private activatedRoute: ActivatedRoute,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.visualizarFilme(this.activatedRoute.snapshot.params['id'])
  }

  private visualizarFilme(id: number): void {
    this.filmesService.visualizar(id).subscribe(
      (filme: Filme) => this.filme = filme
    )
  }

}
