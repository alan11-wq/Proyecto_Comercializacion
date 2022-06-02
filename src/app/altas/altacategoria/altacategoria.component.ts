import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-altacategoria',
  templateUrl: './altacategoria.component.html',
  styleUrls: ['./altacategoria.component.css']
})
export class AltacategoriaComponent implements OnInit {

  public formaltaCategoria : FormGroup | any;

constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  this.formaltaCategoria = this.formBuilder.group({
    nombre: ['', Validators.required],
    descripcion:['', Validators.required]
  })
  }
SaveCategoria(){
  console.log(this.formaltaCategoria.value)
}
}
