import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";


import {RoutingRoutingModule} from "../routing/routing-routing.module";
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        PrincipalComponent
    ],
  exports: [
    HomeComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
      RouterModule,
      RoutingRoutingModule,

    ]
})
export class NavegacionModule { }
