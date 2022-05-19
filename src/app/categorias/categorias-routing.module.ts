import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AudioyvideoComponent} from "../categorias/audioyvideo/audioyvideo.component";
import {ComputoComponent} from "../categorias/computo/computo.component";
import {ExclusivosComponent} from "../categorias/exclusivos/exclusivos.component";
import {GamersComponent} from "../categorias/gamers/gamers.component";
import {HogarComponent} from "../categorias/hogar/hogar.component";
import {SaludybellezaComponent} from "../categorias/saludybelleza/saludybelleza.component";
import {TelefoniaComponent} from "../categorias/telefonia/telefonia.component";



const routes: Routes = [

  {path: '', children:[
      {path:'categoria/audioyvideo',component:AudioyvideoComponent},
      {path:'categoria/computo',component:ComputoComponent},
      {path:'categoria/exclusivos',component:ExclusivosComponent},
      {path:'categoria/gamers', component: GamersComponent},
      {path:'categoria/hogar', component: HogarComponent},
      {path:'categoria/saludybelleza', component:SaludybellezaComponent},
      {path:'categoria/telefonia', component:TelefoniaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
