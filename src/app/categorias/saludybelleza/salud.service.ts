import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludService {
  listProd():any
  {
    return this.listasalud;
  }

  listasalud:any[]=[{
    id: 1,
    nombre: 'TERMOMETRO INFRARROJO DIGITAL AIQUIRA',
    precio: '$599.00',
    imagen: './assets/termometro.jpg'
  },
    {
      id: 2,
      nombre: 'SMART BAND RADIOSHAK BLUETOOTH',
      precio: ' $1,199.00',
      imagen: './assets/reloj.jpg'
    },
    {
      id: 3,
      nombre: 'CORTADORA DE CABELLO CONAIR KIT',
      precio: '$999.00',
      imagen: './assets/cortadora.jpg'
    },
    {
      id: 4,
      nombre: 'RASURADORA CONAIR KIT<',
      precio: '$499.00',
      imagen: './assets/rasuradora.jpg'
    }]
  constructor() { }
}
