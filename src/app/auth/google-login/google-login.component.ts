// Angular Native
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../core/auth/auth.service';

// We declare imported libraries in the index.html.
declare const gapi;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  public auth2: any;

  constructor(private authService: AuthService, 
              private router: Router, 
              private ngZone: NgZone
              ) {}

  ngOnInit(): void {
    this.renderButton();
  }

  /*
    * Run authentication with Google.
  */
  public async startApp(): Promise<any> {
    await this.authService.googleInitConfig();
    this.auth2 = this.authService.auth2;
    this.attachSignin(document.getElementById('my-signin2'));
  };

  /*
    * Login with Google user.
  */
  private attachSignin(element): void {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.authService.signInWithGoogle(id_token)
                          .subscribe(user => {
                              // Retrieve the singleton for the GoogleAuth library and set up the client.
                              this.ngZone.run(() => this.router.navigateByUrl('/panel'));
                          });
        },
        error => {
          let err = {
            error: {
              error: 'We cannot authenticate your user account with Google.'
            }
          }
          // this.errorAuth(err);
        });
  }

  /*
    * Build the button to login with google.
  */
  public renderButton(): void {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();
  }

}
