import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TelefoniaService {
  listProd():any
  {
    return this.listatelefonia;
  }

  listatelefonia:any[]=[{
    id: 1,
    nombre: 'IPHONE XS APPLE / 64GB / REACONDICIONADO',
    precio: '$9,599.00',
    imagen: './assets/iphone%20XS.jpg'
  },
    {
      id: 2,
      nombre: 'SAMSUNG A6 / 8GB / REACONDICIONADO',
      precio: '$6,199.00',
      imagen: './assets/samsungA6.jpg'
    },
    {
      id: 3,
      nombre: 'TELÉFONO ALÁMBRICO GIGASET DA180',
      precio: '$399.00',
      imagen: './assets/telefono.jpg'
    },
    {
      id: 4,
      nombre: 'TELÉFONO ALÁMBRICO SELECT SOUND 8836',
      precio: '$259.00',
      imagen: './assets/telefono2.png'
    }]
  constructor() { }
}
