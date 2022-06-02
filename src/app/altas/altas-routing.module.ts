import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AltausuarioComponent} from "./altausuario/altausuario.component";
import {AltacategoriaComponent} from "./altacategoria/altacategoria.component";
import {AltaproductoComponent} from "./altaproducto/altaproducto.component";
import {AltatiendaComponent} from "./altatienda/altatienda.component";


const routes: Routes = [

  {path: '', children:[
      {path:'alta/usuario',component:AltausuarioComponent},
      {path:'alta/categoria', component: AltacategoriaComponent},
      {path:'alta/producto', component: AltaproductoComponent},
      {path:'alta/tiendas', component: AltatiendaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AltasRoutingModule { }
