// Native Angular
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

// Enviroments
import { environment } from 'src/environments/environment';

// Intefaces
import { SignUpI } from '../../interfaces/sign-up-form.interface';
import { LoginI } from '../../interfaces/login-form.interface';

// Class
import { User } from '../../models/user.model';

// Rxjs and Operators
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

// We declare imported libraries in the index.html.
declare const gapi;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth2: any;

  constructor( 
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
    ) { 
    this.googleInitConfig();
  }

  /*
    * Add a new user record.
  */
  public add( userData: SignUpI ): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/singup`, userData,  {observe: 'response'})
                    .pipe(
                      tap((data: HttpResponse<any>) => {
                        let idToken = data.headers.get('Authorization');
                        this.saveToken(idToken);
                      }),
                      map((data: HttpResponse<any>) => data.body.data)
                    );
  };

  /*
    * User authentication.
  */
  public signIn( userData: LoginI ): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, userData,  {observe: 'response'})
                    .pipe(
                      tap((data: HttpResponse<any>) => {
                        this.rememberUser(userData);
                        let idToken = data.headers.get('Authorization');
                        this.saveToken(idToken);
                      }),
                      map((data: HttpResponse<any>) => data.body.data)
                    );
  };

  /*
    * Add a new user record and authenticate a user, using the google user.
  */
  public signInWithGoogle( idToken ): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/google/login`, { idToken },  {observe: 'response'})
                    .pipe(
                      tap((data: HttpResponse<any>) => {
                        let idToken = data.headers.get('Authorization');
                        this.saveToken(idToken);
                      }),
                      map((data: HttpResponse<any>) => data.body.data)
                    );
  };

  /*
    * Close the session by removing the token from the localstorage and disconnect the session with google.
  */
  public logaut(): void {
    localStorage.removeItem('Token');
    this.auth2.signOut().then(() => {
      // We use Angular Core's NgZone to handle Angular procedures that are called by third-party libraries.
      this.ngZone.run(() => this.router.navigateByUrl('/auth/login'));  
    });
  };

  /*
    * Check if the authentication status is valid.
    * Check if an idToken exists.
  */
  public authenticationStatus(idToken: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers  = headers.append('Authorization', idToken);

    return this.http.get(`${environment.apiUrl}/auth/status/review`,  { observe: 'response', headers  })
                    .pipe(
                      tap((data: HttpResponse<any>) => {
                        let idToken = data.headers.get('Authorization');
                        this.saveToken(idToken);
                      }),
                      map((data: HttpResponse<any>) => true),
                      catchError(err => of(false)),
                    );
  }

  /*
    * Start the authentication setup with google.
  */
  public googleInitConfig(): Promise<any> {   
    return new Promise( resolve => {
      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: environment.CLIENT_ID_GOOGLE,
          cookiepolicy: 'single_host_origin',
        });
        resolve(null);
      });  
    }); 
  };

  /*
    * Save the authentication idToken in the localstorage.
  */
  private saveToken( idToken: string ): void {
    localStorage.setItem('Token', idToken);
  }

  /*
    * It checks if there is an idToken stored in the localstorage and returns it.
  */
  public readToken(): string {
    let userToken: string | null = localStorage.getItem( 'Token' );
    return userToken;
  }

  /*
    * Save the user's email in the localstorage.
  */
  private rememberUser(userData: LoginI): void {
    if(userData.remember) {
      return localStorage.setItem('Email', userData.email);
    };

    if(!userData.remember && localStorage.getItem('Email')) {
      return localStorage.removeItem('Email');
    };  
  }

  
}
