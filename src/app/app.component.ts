import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { OAuthService } from 'angular-oauth2-oidc';
import {HomePageModule as HomePage} from './home/home.module';
import {SignInPageModule as SignInPage} from './pages/sign-in/sign-in.module';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Find a Coach',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Playback',
      url: '/playback',
      icon: 'video'
    },
    {
      title: 'Video Editor',
      url: '/editor',
      icon: 'video'
    }
  ];

  rootPage:any = HomePage;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private oauthService : OAuthService
  ) {
    // this.initializeApp();

    // if (oauthService.hasValidIdToken()) {
    //   this.rootPage = HomePage;
    // } else {
    //   this.rootPage = SignInPage;
    // }
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
