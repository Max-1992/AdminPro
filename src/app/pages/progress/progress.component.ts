import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  // Declare Propertys
  public progress1: number = 50;
  public progress2: number = 50;

  constructor() { };

  ngOnInit() {
  };


}
