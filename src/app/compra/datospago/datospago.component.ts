import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-datospago',
  templateUrl: './datospago.component.html',
  styleUrls: ['./datospago.component.css']
})
export class DatospagoComponent implements OnInit {

  public formPago: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPago = this.formBuilder.group({
      credit:['', Validators.requiredTrue],
      debit:['', Validators.requiredTrue],
      paypal:['', Validators.requiredTrue],
      name:['', Validators.required],
      number:['', Validators.required, Validators.minLength(16)],
      expiration:['', Validators.required, Validators.maxLength(4)],
      cvv:['', Validators.required, Validators.maxLength(3)]
    })
  }

  SavePago() {
    console.log(this.formPago.value)
  }
}
