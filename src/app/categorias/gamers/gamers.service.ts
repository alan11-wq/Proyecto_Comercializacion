import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamersService {
  listProd():any
  {
    return this.listagamers;
  }

  listagamers:any[]=[{
    id: 1,
    nombre: 'ONSOLA XBOX ONE SERIES 500 GB',
    precio: '$8,999.00',
    imagen: './assets/xbox.jpg'
  },
    {
      id: 2,
      nombre: 'CONSOLA PLAY STATION 5 1TB',
      precio: ' $18,999.00',
      imagen: './assets/ps5.jpg'
    },
    {
      id: 3,
      nombre: 'NINTENDO SWITCH',
      precio: '$7,999.00',
      imagen: './assets/nintendo.jpg'
    },
    {
      id: 4,
      nombre: 'CONTROL XBOX ONE',
      precio: '$1,899.00',
      imagen: './assets/control.jpg'
    }]
  constructor() { }
}
