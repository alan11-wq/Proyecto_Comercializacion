import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {CategoriasModule} from "./categorias/categorias.module";
import {NavegacionModule} from "./navegacion/navegacion.module";
import {CompraModule} from "./compra/compra.module";


import {RoutingRoutingModule} from "./routing/routing-routing.module";
import {CategoriasRoutingModule} from "./categorias/categorias-routing.module";
import {ComprasRoutingModule} from "./compra/compra-routing.module";
import {ProductosRoutingModule} from "./productos/productos-routing.module";


@NgModule({
  declarations: [
    AppComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RoutingRoutingModule,
    CategoriasRoutingModule,
    ComprasRoutingModule,
      ProductosRoutingModule,


    CategoriasModule,
    NavegacionModule,
    CompraModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
