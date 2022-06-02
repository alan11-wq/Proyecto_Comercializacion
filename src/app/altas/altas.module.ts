import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD


import {RoutingRoutingModule} from "../routing/routing-routing.module";
import {RouterModule} from "@angular/router";
import {NavegacionModule} from "../navegacion/navegacion.module";
import {AltasRoutingModule} from "./altas-routing.module";

import {AltacategoriaComponent} from "./altacategoria/altacategoria.component";
import {AltaproductoComponent} from "./altaproducto/altaproducto.component";
import {AltatiendaComponent} from "./altatienda/altatienda.component";
import {AltausuarioComponent} from "./altausuario/altausuario.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AltatiendaComponent,
    AltausuarioComponent,
    AltaproductoComponent,
    AltacategoriaComponent
  ],
  exports: [

  ],
    imports: [
        CommonModule,
        RoutingRoutingModule,
        RouterModule,
        NavegacionModule,
        AltasRoutingModule,
        ReactiveFormsModule
    ]
=======
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { AltaTiendaComponent } from './alta-tienda/alta-tienda.component';
import { AltaCategoriaComponent } from './alta-categoria/alta-categoria.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';



@NgModule({
  declarations: [
    RegistrarUsuarioComponent,
    AltaUsuarioComponent,
    AltaTiendaComponent,
    AltaCategoriaComponent,
    AltaProductoComponent
  ],
  imports: [
    CommonModule
  ]
>>>>>>> aed90833bebb29a618d4fa947fec46214f61afc7
})
export class AltasModule { }
