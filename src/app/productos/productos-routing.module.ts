import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Audioyvideo1Component} from "./audioyvideo1/audioyvideo1.component";

const routes: Routes = [
  {path:'', children:[
      {path:'audioyvideo/1', component: Audioyvideo1Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
