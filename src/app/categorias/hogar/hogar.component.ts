import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HogarService} from "./hogar.service";
import {AudioService} from "../audioyvideo/audio.service";

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit {
  listahogar: any[] = [];
  constructor(private hogarService:HogarService,private route:Router, private ruta:ActivatedRoute) {
    this.listahogar = this.hogarService.listProd();
  }

  ngOnInit(): void {
  }

}
