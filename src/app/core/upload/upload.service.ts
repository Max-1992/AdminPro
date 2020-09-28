import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient){ }

  uploadImages(id: string, type: string, file: File): Observable<string>  {

    let idToken: string = localStorage.getItem( 'Token' );
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', idToken);

    const formDataImage = new FormData();
    formDataImage.append('image', file);

    return this.http.put<string>(`${environment.apiUrl}/upload/image/${type}/${id}`, formDataImage, { headers })
                    .pipe(
                      map( (data: any) => data.data )
                    );

  }

}
