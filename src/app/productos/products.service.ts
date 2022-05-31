import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listProdAudio():any
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


  listProdComputo():any
  {
    return this.listacomputo;
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


  listProdExclusivos():any
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

  listProdGamers():any
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


  listProdHogar():any
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


  listProdSalud():any
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


  listProdTelefonia():any
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
