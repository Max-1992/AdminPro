// Native Angular
import { Component, OnInit } from '@angular/core';

// Services
import { SidebarService } from '../../../core/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navegation: any[];

  constructor( private sidebarService: SidebarService ) {
    this.navegation = sidebarService.menu;
   }

  ngOnInit() {
  }

}
