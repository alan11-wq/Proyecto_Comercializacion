import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SaludService} from "./salud.service";
import {AudioService} from "../audioyvideo/audio.service";

@Component({
  selector: 'app-saludybelleza',
  templateUrl: './saludybelleza.component.html',
  styleUrls: ['./saludybelleza.component.css']
})
export class SaludybellezaComponent implements OnInit {
  listasalud: any[] = [];
  constructor(private saludService:SaludService,private route:Router, private ruta:ActivatedRoute) {
    this.listasalud = this.saludService.listProd();
  }
  ngOnInit(): void {
  }

}
