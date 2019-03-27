import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Videogular
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { VideoEditorComponent } from '../video-editor/video-editor.component';
import { ScreenPainterComponent } from '../screen-painter/screen-painter.component';
import { ScreenPainterButtonComponent } from '../screen-painter-button/screen-painter-button.component';
import { RecordButtonComponent } from '../record-button/record-button.component';
import { VgAPI } from 'videogular2/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [
    VideoEditorComponent, 
    ScreenPainterComponent, 
    ScreenPainterButtonComponent, 
    RecordButtonComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    IonicModule.forRoot(),
  ],
  providers: [
    
  ]
})
export class VideoEditorModule { }
