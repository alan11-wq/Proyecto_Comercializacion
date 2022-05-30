import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";


import {RoutingRoutingModule} from "../routing/routing-routing.module";
import { PrincipalComponent } from './principal/principal.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        PrincipalComponent,
        HeaderComponent,
        FooterComponent
    ],
  exports: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent
  ],
    imports: [
        CommonModule,
      RouterModule,
      RoutingRoutingModule

    ]
})
export class NavegacionModule { }
