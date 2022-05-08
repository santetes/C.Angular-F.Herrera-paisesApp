import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  textoPlaceholder: string = '';

  constructor(private paisService: PaisService) {}

  buscarPais(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(this.termino).subscribe({
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
