// Native Angular
import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { AuthService } from '../../../core/auth/auth.service';
import { UserService } from '../../../core/user/user.service';

// Class
import { User } from 'src/app/models/user.model';

// Rxjs and Operators
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User;
  private userSubscription: Subscription = new Subscription();

  constructor( 
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userSubscription = this.userService.user$.subscribe( (user: User) => this.user = user )
  }

  public logaut(): void {
    this.authService.logaut();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
