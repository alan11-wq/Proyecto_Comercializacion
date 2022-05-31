import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listaaudio: any[] = [];
  listacomputo: any[]=[];
  listaexclusivos: any[]=[];
  listagamers: any[]=[];
  listahogar: any[]=[];
  listasalud: any[]=[];
  listatelefonia: any[]=[];

  constructor(private productsService: ProductsService, private route: Router, private ruta: ActivatedRoute) {
    this.listaaudio = this.productsService.listProdAudio();
    this.listacomputo = this.productsService.listProdComputo();
    this.listaexclusivos = this.productsService.listProdExclusivos();
    this.listagamers = this.productsService.listProdGamers();
    this.listahogar = this.productsService.listProdHogar();
    this.listasalud = this.productsService.listProdSalud();
    this.listatelefonia = this.productsService.listProdTelefonia();

  }

  ngOnInit(): void {
  }

  MostrarProductoAudioyVideo() {
    this.route.navigate(['audioyvideo/1'])
    this.route.navigate(['audioyvideo2'])
    this.route.navigate(['audioyvideo/3'])
    this.route.navigate(['audioyvideo/4'])
  }

  MostrarProductoComputo(){
    this.route.navigate(['computo/1'])
    this.route.navigate(['computo/2'])
    this.route.navigate(['computo/3'])
    this.route.navigate(['computo/4'])
  }

      MostrarProductoExclusivo(){
    this.route.navigate(['exclusivos/1'])
    this.route.navigate(['exclusivos/2'])
    this.route.navigate(['exclusivos/3'])
    this.route.navigate(['exclusivos/4'])
      }


      MostrarProductoGamers(){
    this.route.navigate(['gamers/1'])
    this.route.navigate(['gamers/2'])
    this.route.navigate(['gamers/3'])
    this.route.navigate(['gamers/4'])
      }


      MostrarProductoHogar(){
    this.route.navigate(['hogar/1'])
    this.route.navigate(['hogar/2'])
    this.route.navigate(['hogar/3'])
    this.route.navigate(['hogar/4'])
      }

      MostrarProductoSalud(){
    this.route.navigate(['salud/1'])
    this.route.navigate(['salud/2'])
    this.route.navigate(['salud/3'])
    this.route.navigate(['salud/4'])
      }

      MostrarProductoTelefonia(){
    this.route.navigate(['telefonia/1'])
    this.route.navigate(['telefonia/2'])
    this.route.navigate(['telefonia/3'])
    this.route.navigate(['telefonia/4'])
      }
}
