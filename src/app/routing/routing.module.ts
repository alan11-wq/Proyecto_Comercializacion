import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import {RouterModule} from "@angular/router";

import {CategoriasModule} from "../categorias/categorias.module";
import {NavegacionModule} from "../navegacion/navegacion.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule,
    CategoriasModule,
    NavegacionModule
  ]
})
export class RoutingModule { }
