// Native Angular
import { Injectable } from '@angular/core';

// SweetAlert
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

 /*
  * Build a toast window success.
 */
  success(data: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000
    });
    
    Toast.fire({
      title: "Actualizado!",
      text: `${data}`,
      icon: "success",
     
    });
  }

 /*
  * Build a modal window to display authentication success.
 */
  successAuth(): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000
    });
    
    Toast.fire({
      title: "Bienvenido/a!",
      text: "La sesion se inición correctamente.",
      icon: "success",
    
    });
  }

 /*
  * Build a toast window errors.
 */
  error(err: any): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000
    });
    
    Toast.fire({
      title: "Ups!",
      text: `${err.error.error}`,
      icon: "error",
     
    });
  }

 /*
  * Build a modal window to display authentication errors.
 */
 errorAuth(err: any): void {
  Swal.fire({
    title: "Ups!",
    text: `${err.error.error}`,
    icon: "error",
  });
}

}
