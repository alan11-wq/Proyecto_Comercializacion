import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  public formAltaUsuario: FormGroup | any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formAltaUsuario = this.formBuilder.group({
      administrador: ['',Validators.requiredTrue],
      cliente: ['', Validators.requiredTrue],
      visitante:['', Validators.requiredTrue],
      nombre:['', Validators.required],
      apellidop:['', Validators.required],
      apellidom:['', Validators.required],
      fecha:['', Validators.required],
      email:['', Validators.email,Validators.required],
      telefono:['', Validators.required,Validators.maxLength(10)],
      address: ['', Validators.required],
      colonia:['', Validators.required],
      municipio:['', Validators.required],
      state: ['', Validators.requiredTrue],
      pais:['', Validators.requiredTrue],
      cp:['', Validators.required, Validators.maxLength(8)]

    })
  }
  SaveUsuario(){
    console.log(this.formAltaUsuario.value)
  }

}
