import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HogarService {
  listProd():any
  {
    return this.listahogar;
  }

  listahogar:any[]=[{
    id: 1,
    nombre: 'APAGADOR SMART DIMMER WMO/BLANCO',
    precio: '$1,999.00',
    imagen: './assets/apagador.jpg'
  },
    {
      id: 2,
      nombre: 'DETECTOR DE HUMO INTELIGENTE LLOYDS LC-1210',
      precio: '$899.00',
      imagen: './assets/detector.jpg'
    },
    {
      id: 3,
      nombre: 'ROUTER INALAMBRICO TP-LINK/NEGRO',
      precio: '$7,999.00',
      imagen: './assets/router.jpg'
    },
    {
      id: 4,
      nombre: 'LICUADORA PORTATIL RECARGABLE RADIOSHAK/NEGRO',
      precio: '$899.00',
      imagen: './assets/licuadora.jpg'
    }]
  constructor() { }
}
