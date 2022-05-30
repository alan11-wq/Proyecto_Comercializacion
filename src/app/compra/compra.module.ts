import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { DatosenvioComponent } from './datosenvio/datosenvio.component';
import { DatospagoComponent } from './datospago/datospago.component';
import { ConfirmacioncompraComponent } from './confirmacioncompra/confirmacioncompra.component';

import {NavegacionModule} from "../navegacion/navegacion.module";

import {RouterModule} from "@angular/router";
import {RoutingRoutingModule} from "../routing/routing-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CarritoComponent,
    DatosenvioComponent,
    DatospagoComponent,
    ConfirmacioncompraComponent
  ],
  imports: [
    CommonModule,
    NavegacionModule,
    RouterModule,
    RoutingRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompraModule { }
