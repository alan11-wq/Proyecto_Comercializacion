import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamersComponent } from './gamers/gamers.component';
import { ComputoComponent } from './computo/computo.component';
import { AudioyvideoComponent } from './audioyvideo/audioyvideo.component';
import { HogarComponent } from './hogar/hogar.component';
import { TelefoniaComponent } from './telefonia/telefonia.component';
import { SaludybellezaComponent } from './saludybelleza/saludybelleza.component';
import { ExclusivosComponent } from './exclusivos/exclusivos.component';

import {NavegacionModule} from "../navegacion/navegacion.module";

import {RoutingRoutingModule} from "../routing/routing-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    GamersComponent,
    ComputoComponent,
    AudioyvideoComponent,
    HogarComponent,
    TelefoniaComponent,
    SaludybellezaComponent,
    ExclusivosComponent
  ],
  exports: [
    AudioyvideoComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule,
    NavegacionModule
  ]
})
export class CategoriasModule { }
