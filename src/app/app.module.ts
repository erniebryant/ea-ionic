import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Ionic/Cordova Plugins
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
//import { Camera } from '@ionic-native/camera/ngx';
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
//import { Stripe } from '@ionic-native/stripe';
//import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { CoachSearchComponent } from './coach-search/coach-search.component';
import { PlaybackComponent } from './playback/playback.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';
//import { CollegeSearchFilterPipe } from './coach-search/coach-search-filter.pipe';

// Videogular
import {VgCoreModule, VgAPI} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {VideoEditorModule} from './video-editor/video-editor.module';
import { CoachSearchComponent } from './coach-search/coach-search.component';
import { CollegeSearchFilterPipe } from './coach-search/coach-search-filter.pipe';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaybackComponent,

    CollegeSearchFilterPipe,
    CoachSearchComponent,
    CoachDetailComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    VideoEditorModule
  ],
  providers: [
    StatusBar,
//    Camera,
    SplashScreen,
    VgAPI,
//    Stripe,
//    ScreenOrientation,
//    VideoCapturePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
