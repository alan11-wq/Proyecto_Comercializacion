import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AudioService} from "./audio.service";

@Component({
  selector: 'app-audioyvideo',
  templateUrl: './audioyvideo.component.html',
  styleUrls: ['./audioyvideo.component.css']
})
export class AudioyvideoComponent implements OnInit {

  listaaudio: any[] = [];


  constructor(private audioService:AudioService,private route:Router, private ruta:ActivatedRoute) {
    this.listaaudio = this.audioService.listProd();
  }

  ngOnInit(): void {
  }

  MostrarProductoAudioyVideo1()
  {
    this.route.navigate(['producto/audioyvideo1'])
  }
}
