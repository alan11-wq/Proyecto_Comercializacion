import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExclusivosService {
  listProd():any
  {
    return this.listaexclusivos;
  }

  listaexclusivos:any[]=[{
    id: 1,
    nombre: 'PANTALLA LG 60 PULGADAS',
    precio: 'De $15,999.00 a $10,999.00',
    imagen: './assets/pantallaLG.jpg'
  },
    {
      id: 2,
      nombre: 'BOCINA HUAWEI INALAMBRICA',
      precio: 'De $5,099.00 a $3,899.00',
      imagen: './assets/bocina.jpg'
    },
    {
      id: 3,
      nombre: 'IPAD APPLE GENERATION V5',
      precio: 'De $18,999.00 a $13,099.00',
      imagen: './assets/tabletapple.jpg'
    },
    {
      id: 4,
      nombre: 'SAMSUNG GALAXY J8',
      precio: 'De $8,999.00 a $6,799.00',
      imagen: './assets/celsamsung.jpg'
    }]
  constructor() { }
}
