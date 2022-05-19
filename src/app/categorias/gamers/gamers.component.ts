import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GamersService} from "./gamers.service";
import {AudioService} from "../audioyvideo/audio.service";

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.css']
})
export class GamersComponent implements OnInit {
  listagamers: any[] = [];
  constructor(private gamersService:GamersService,private route:Router, private ruta:ActivatedRoute) {
    this.listagamers = this.gamersService.listProd();
  }
  ngOnInit(): void {
  }

}
