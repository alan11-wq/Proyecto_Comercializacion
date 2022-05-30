import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DatospagoComponent} from "./datospago/datospago.component";
import {DatosenvioComponent} from "./datosenvio/datosenvio.component";
import {ConfirmacioncompraComponent} from "./confirmacioncompra/confirmacioncompra.component";

const routes: Routes = [
  {path:'', children:[
      {path: 'compra/envio', component:DatosenvioComponent},
      {path:'compra/pago', component: DatospagoComponent},
      {path:'compra/confirmacion', component:ConfirmacioncompraComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }



