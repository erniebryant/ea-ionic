import { Component, OnInit, ViewChild } from '@angular/core';
// import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

  constructor(
    // private oauthService: OAuthService
    ) {
    // oauthService.redirectUri = window.location.origin;
    // oauthService.clientId = '[client-id]';
    // oauthService.scope = 'openid profile email';
    // oauthService.oidc = true;
    // oauthService.issuer = 'https://dev-[dev-id].oktapreview.com';
   }

  ngOnInit() {
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }


}
