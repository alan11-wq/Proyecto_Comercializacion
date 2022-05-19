import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "../navegacion/home/home.component";
import {PrincipalComponent} from "../navegacion/principal/principal.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'productos', loadChildren:()=>import('./routing.module').then(module=>module.RoutingModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
