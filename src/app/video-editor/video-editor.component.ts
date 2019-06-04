import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; 

import { VgPlayer } from 'videogular2/core';
// Videogular
import {VgAPI } from 'videogular2/core';


@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit {

  video = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.video = this.route.snapshot.paramMap.get('video');
  }

  api:VgAPI;
  vgMedia;

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }
}
