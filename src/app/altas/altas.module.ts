import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { AltaTiendaComponent } from './alta-tienda/alta-tienda.component';
import { AltaCategoriaComponent } from './alta-categoria/alta-categoria.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';



@NgModule({
  declarations: [
    RegistrarUsuarioComponent,
    AltaUsuarioComponent,
    AltaTiendaComponent,
    AltaCategoriaComponent,
    AltaProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AltasModule { }
