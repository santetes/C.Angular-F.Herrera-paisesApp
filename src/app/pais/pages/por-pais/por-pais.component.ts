import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = ''
  hayError: boolean = false
  paises: Pais[] = []

  constructor(private paisService: PaisService) { }

  buscar(){
      this.hayError = false
      this.paisService.buscarPais(this.termino)
        .subscribe({
          next: (paises)=>{
            this.paises = paises
            this.termino = ''
          },
          error: (err)=>{
            this.hayError = true
            this.paises =  []
          }
        },
        )

  }

}
