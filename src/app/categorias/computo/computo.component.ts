import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComputoService} from "./computo.service";


@Component({
  selector: 'app-computo',
  templateUrl: './computo.component.html',
  styleUrls: ['./computo.component.css']
})
export class ComputoComponent implements OnInit {

  listacomputo: any[] = [];

  constructor(private computoService:ComputoService,private route:Router, private ruta:ActivatedRoute) {
    this.listacomputo =this.computoService.listProd();
  }

  ngOnInit(): void {
  }

}
