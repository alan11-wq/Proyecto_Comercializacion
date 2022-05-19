import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
listProd():any
{
return this.listaaudio;
}

listaaudio:any[]=[{
  id: 1,
  nombre: 'AUDIFONOS INALÁMBRICOS SONY',
  precio: '$299.00',
  imagen: './assets/Aud_Sony.jpg'
},
  {
    id: 2,
    nombre: 'PANTALLA SAMSUNG 75 PULGADAS',
    precio: '$21,999.00',
    imagen: './assets/Pantalla_Sam.jpg'
  },
  {
    id: 3,
    nombre: 'MEZCLADORA DJ BEHRINGER 802',
    precio: '$1,699.00',
    imagen: './assets/mezcladora.jpg'
  },
  {
    id: 4,
    nombre: 'CÁMARA CANNON INSTAX PLUS',
    precio: '$4,999.00',
    imagen: './assets/camara.jpg'
}]
  constructor() { }
}
