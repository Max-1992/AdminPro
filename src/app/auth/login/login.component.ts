// Native Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../core/auth/auth.service';

// SweetAlert
import Swal from 'sweetalert2';

// Class
import { User } from '../../models/user.model';

// Interface
import { LoginI } from '../../interfaces/login-form.interface';
import { ToastService } from '../../core/notifications/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor( 
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private router: Router,
      private toast: ToastService
    ) { 
      this.buildForm();
      this.readUser();
    }

  ngOnInit() {}

  /*
    * Login the user.
  */
  public login(): void {

      if(this.form.invalid) return;

      let userData: LoginI = this.form.value;

      this.authService.signIn(userData)
                      .subscribe( (user: User) => {
                        this.router.navigateByUrl('/panel');
                        this.toast.successAuth();
                      },
                      err => this.toast.errorAuth(err));
  }

  /*
    * Read if there is a user stored in the localstorage.
    * Set the user value found in the form as the default value of the email field.
  */
  private readUser(): void {

    let readEmail: string | null = localStorage.getItem('Email');

    if(readEmail) {
      this.form.patchValue({
        'email': readEmail
      });
    };

  }

  /*
    * Constructor Form.
  */
  private buildForm(): void {

    this.form = this.formBuilder.group({
      email: [ '', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ],
      password: [ '', [Validators.required] ],
      remember: [true]
    });

  }

  /*
    * Create pointers towards the form properties.
  */
  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

}
