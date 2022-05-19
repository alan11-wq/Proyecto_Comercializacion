import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExclusivosService} from "./exclusivos.service";
import {AudioService} from "../audioyvideo/audio.service";

@Component({
  selector: 'app-exclusivos',
  templateUrl: './exclusivos.component.html',
  styleUrls: ['./exclusivos.component.css']
})
export class ExclusivosComponent implements OnInit {
  listaexclusivos: any[] = [];
  constructor(private exclusivosService:ExclusivosService,private route:Router, private ruta:ActivatedRoute) {
    this.listaexclusivos = this.exclusivosService.listProd();
  }
  ngOnInit(): void {
  }

}
