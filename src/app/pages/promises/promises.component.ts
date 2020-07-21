import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { 

    this.counterPointer()
        .then( data => console.log('Termino'))
        .catch( err => console.error(err))


  }

  ngOnInit() {
  }

  counterPointer() {

    return new Promise( (resolve, reject) => {

      let counter = 0;

      let interval = setInterval( () => {

        counter += 1;

        if( counter === 3 ) {
          resolve();
          clearInterval(interval);
        }

      }, 1000);

    });

  }

}
