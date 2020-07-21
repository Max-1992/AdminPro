import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  // Declare Propertys
  @Input() title: string;
  @Input() progress: number;

  // Declare Custom Events
  @Output() progressCurrent: EventEmitter<number> = new EventEmitter();

  // Select Elments the DOM
  @ViewChild('progressIput', {static: false}) elementInputProgress: ElementRef;

  constructor() { };

  ngOnInit() {
  };

  increase(): void {
    if( this.progress >= 100 ) return null;
    this.progress += 5;
    this.progressCurrent.emit(this.progress);
  };

  decrease(): void {
    if( this.progress <= 0 ) return null;
    this.progress -= 5;
    this.progressCurrent.emit(this.progress);
  };

  setProgress( progressCurrentValue: number ): void {

    // Assign value received from the client
    this.progress = progressCurrentValue;

    // Filed Validate
    if(  this.progress >= 100 ) this.progress = 100;

    if(  this.progress <= 0 ) this.progress = 0;

    if( !this.progress ) this.progress = 0;

    // Field Validate Input Element
    this.elementInputProgress.nativeElement.value = this.progress;

    // Setting Event
    this.elementInputProgress.nativeElement.focus();

    // Output data to parent component
    this.progressCurrent.emit(this.progress);

  }

}
