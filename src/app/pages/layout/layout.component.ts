// Native Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { UserService } from '../../core/user/user.service';

// Class
import { User } from 'src/app/models/user.model';

// Rxjs and Operators
import { Subscription } from 'rxjs';

declare function init_plugins();

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  public user: User;
  private userSubscription: Subscription = new Subscription();

  constructor(private userService: UserService) { 
    init_plugins();
  }

  ngOnInit() {
    this.userService.getMe();
    this.userSubscription = this.userService.user$.subscribe( (user: User) => this.user = user );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
 