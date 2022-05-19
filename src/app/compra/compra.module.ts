import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { DatosenvioComponent } from './datosenvio/datosenvio.component';
import { DatospagoComponent } from './datospago/datospago.component';
import { ConfirmacioncompraComponent } from './confirmacioncompra/confirmacioncompra.component';



@NgModule({
  declarations: [
    CarritoComponent,
    DatosenvioComponent,
    DatospagoComponent,
    ConfirmacioncompraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }
