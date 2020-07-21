// Native Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// Rxjs
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public obs: Observable<any>;
  public subObs: Subscription;

  constructor() {

    this.subObs = this.contador()
                      .subscribe( 
                        data => console.log(data),
                        err => console.log('Error recibido', err) ,
                        () => console.log('Observable Termino de Emitir.')
                      );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subObs.unsubscribe();
  }

  contador(): Observable<any> {

    return  this.obs = new Observable( observer => {

      let contador = 0;

      let interval = setInterval( () => {

        contador += 1

        observer.next(contador);
        
      }, 1000)

    });

  }


}
