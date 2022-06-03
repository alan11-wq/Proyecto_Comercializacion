import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  exports: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule,
    NavegacionModule,
    AltasRoutingModule,
    ReactiveFormsModule
  ]
})
export class AltasModule { }
