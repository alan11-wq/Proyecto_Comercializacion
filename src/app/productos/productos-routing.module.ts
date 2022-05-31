import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Audioyvideo1Component} from "./audioyvideo1/audioyvideo1.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path:'', children:[
      {path:'audioyvideo/1', component: Audioyvideo1Component},
      {path:'products', component: ProductsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
