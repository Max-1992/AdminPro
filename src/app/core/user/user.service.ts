// Native Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Enviroments
import { environment } from 'src/environments/environment';

// Class
import { User } from '../../models/user.model';

// Rxjs and Operators
import { Subject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private obsUser$: Subject<User> = new Subject<User>();
  public user$: Observable<User> = this.obsUser$.asObservable();

  constructor(private http: HttpClient) {}

  public getMe(): void {
    let idToken: string = localStorage.getItem( 'Token' );
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', idToken);

    this.http.get<User>(`${environment.apiUrl}/user/me`, { headers })
             .pipe(
               map( (data: any) => data.data )
             )
             .subscribe( (user: User) => this.obsUser$.next(user) )
  }


  public update(user: User): Observable<string> {
    let idToken: string = localStorage.getItem( 'Token' );
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', idToken);
    
    return this.http.put<string>(`${environment.apiUrl}/user/${user.id}`, user, { headers })
                    .pipe(
                      tap((data: any) => this.getMe()),
                      map( (data: any) => data.data )
                    );
  }


}
