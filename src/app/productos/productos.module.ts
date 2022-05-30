import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RoutingRoutingModule} from "../routing/routing-routing.module";

import { ProductosRoutingModule } from './productos-routing.module';
import { Audioyvideo1Component } from './audioyvideo1/audioyvideo1.component';
import {NavegacionModule} from "../navegacion/navegacion.module";


@NgModule({
  declarations: [
    Audioyvideo1Component
  ],
    imports: [
        CommonModule,
        ProductosRoutingModule,
        NavegacionModule,
      RouterModule,
      RoutingRoutingModule
    ]
})
export class ProductosModule { }
