import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TelefoniaService} from "./telefonia.service";

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {
  listatelefonia: any[] = [];
  constructor(private telefoniaService:TelefoniaService,private route:Router, private ruta:ActivatedRoute) {
    this.listatelefonia = this.telefoniaService.listProd();
  }

  ngOnInit(): void {
  }

}
