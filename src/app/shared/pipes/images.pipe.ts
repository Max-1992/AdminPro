// Native Angular
import { Pipe, PipeTransform } from '@angular/core';

// Enviroments
import { environment } from 'src/environments/environment';

// Class
import { User } from 'src/app/models/user.model';


@Pipe({
  name: 'images'
})
export class Images implements PipeTransform {

  transform(value: User, type: string): string {

    if(!value) return null;
    
    if(value.google && value.image) {
      return value.image;
    }

    if(value.image) {
      let imgUrl = `${environment.apiUrl}/upload/image/${type}/${value.image}` 
      return imgUrl;
    } else {
      let noImg = 'assets/images/no-image.png'
      return noImg;
    }


  }

}
