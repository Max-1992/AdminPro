import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
