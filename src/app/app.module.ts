import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Ionic/Cordova Plugins
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { Camera } from '@ionic-native/camera/ngx';
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
//import { Stripe } from '@ionic-native/stripe';
//import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoachSearchComponent } from './coach-search/coach-search.component';
import { PlaybackComponent } from './playback/playback.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';
import { CollegeSearchFilterPipe } from './coach-search/coach-search-filter.pipe';

// Videogular
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { ScreenPainterComponent } from './screen-painter/screen-painter.component';
import { ScreenPainterButtonComponent } from './screen-painter-button/screen-painter-button.component';
import { RecordButtonComponent } from './record-button/record-button.component';

@NgModule({
  declarations: [AppComponent, CoachSearchComponent, PlaybackComponent, VideoEditorComponent, CollegeSearchFilterPipe, ScreenPainterComponent, ScreenPainterButtonComponent, RecordButtonComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    StatusBar,
//    Camera,
    SplashScreen,
//    Stripe,
//    ScreenOrientation,
//    VideoCapturePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
