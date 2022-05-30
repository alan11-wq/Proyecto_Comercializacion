import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-datosenvio',
  templateUrl: './datosenvio.component.html',
  styleUrls: ['./datosenvio.component.css']
})
export class DatosenvioComponent implements OnInit {

  public formEnvio: FormGroup | any;

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.formEnvio=this.formBuilder.group({
firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
email:['',Validators.required, Validators.email],
      address:['',Validators.required],
      colonia:['',Validators.required],
      municipio:['',Validators.required],
state:['', Validators.requiredTrue],
      pais:['', Validators.requiredTrue],
      cp:['', Validators.required, Validators.minLength(6)]
    })
  }

  SaveEnvio():any {
console.log(this.formEnvio.value)
  }
}
