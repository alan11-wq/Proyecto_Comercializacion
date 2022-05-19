import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputoService {
  listProd():any {
    return this.listacomputo
  }
  listacomputo:any[]=[{
    id: 1,
    nombre: 'LAPTOP GAMER HP PAVILION',
    precio: '$27,999.00',
    imagen: './assets/laptop.jpg'
  },
    {
      id: 2,
      nombre: 'TABLET LANIX ILLIUM PAD RX10',
      precio: '$2,899.00',
      imagen: './assets/tablet.png'
    },
    {
      id: 3,
      nombre: 'MOUSE INALÁMBRICO HP 220',
      precio: '$599.00',
      imagen: './assets/mouse.jpg'
    },
    {
      id: 4,
      nombre: 'DISCO DURO EXTERNO WD 2TB',
      precio: '>$1,799.00',
      imagen: './assets/disco.jpg'
    }]
  constructor() { }
}
