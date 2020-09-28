// Native Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { SidebarService } from '../../../core/sidebar/sidebar.service';
import { UserService } from '../../../core/user/user.service';

// Class
import { User } from 'src/app/models/user.model';

// Rxjs and Operators
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public navegation: any[];
  public user: User;
  private userSubscription: Subscription = new Subscription();

  constructor( 
    private sidebarService: SidebarService,
    private userService: UserService ) {
    this.navegation = this.sidebarService.menu;
   }

  ngOnInit() {
    this.userSubscription = this.userService.user$.subscribe( (user: User) => this.user = user );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
