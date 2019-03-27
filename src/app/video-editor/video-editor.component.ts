import { Component, OnInit } from '@angular/core';

import { VgPlayer } from 'videogular2/core';
// Videogular
import {VgAPI } from 'videogular2/core';


@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  api:VgAPI;
  vgMedia;

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }
}
