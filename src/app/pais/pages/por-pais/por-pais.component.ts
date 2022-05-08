import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  textoPlaceholder: string = '';

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        this.termino = '';
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }

  sugerencia(termino: string) {
    this.hayError = false;
  }
}
