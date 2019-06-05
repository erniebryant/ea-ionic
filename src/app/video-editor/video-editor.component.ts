import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; 

import { VgPlayer } from 'videogular2/core';
// Videogular
import {VgAPI } from 'videogular2/core';


@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements AfterViewInit {

  video = null;

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.paramMap.subscribe(params => {
      this.video = params.get("video");
      alert("this.video = " + params.get("video"));
    });
    // this.video = this.route.snapshot.paramMap.get('video');
    
  }

  api:VgAPI;
  vgMedia;

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }
}
