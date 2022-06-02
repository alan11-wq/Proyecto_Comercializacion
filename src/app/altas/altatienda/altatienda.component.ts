import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-altatienda',
  templateUrl: './altatienda.component.html',
  styleUrls: ['./altatienda.component.css']
})
export class AltatiendaComponent implements OnInit {

  public formAltaTienda: FormGroup | any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formAltaTienda = this.formBuilder.group({
      nombre:['', Validators.required],
      address: ['', Validators.required],
      colonia:['', Validators.required],
      municipio:['', Validators.required],
      state: ['', Validators.requiredTrue],
      pais:['', Validators.requiredTrue],
      cp:['', Validators.required, Validators.maxLength(8)]
    })
  }
SaveTienda():any {
    console.log(this.formAltaTienda.value)
}
}
