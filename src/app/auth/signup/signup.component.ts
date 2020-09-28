// Native Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Custom Validators
import { CustomValidators } from '../../utils/auth.validations';

// Services
import { AuthService } from '../../core/auth/auth.service';

// Class
import { User } from '../../models/user.model';

// SweetAlert
import Swal from 'sweetalert2';
import { SignUpI } from '../../interfaces/sign-up-form.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor( 
      private formBuilder: FormBuilder,
      private authService: AuthService
    ) {
      this.buildForm();
   }

  ngOnInit() {
  }

  /*
    * Create record the user.
  */
  public addUser(): void {

    if(this.form.invalid) return;

    let userData: SignUpI = this.form.value;

    this.authService.add(userData)
                     .subscribe((user: User) => {
                        console.log(user)
                       },
                       err => this.errorAuth(err));

  }

  /*
    * Build a modal window to display authentication errors.
  */
  private errorAuth(err: any): void {
    Swal.fire({
      title: "Ups!",
      text: `${err.error.error}`,
      icon: "error",
    });
  }

  /*
    * Constructor Form
  */
  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [ '', [Validators.required] ],
      email: [ '', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ],
      dni: [ '', [Validators.required, Validators.minLength(7)] ],
      password: [ '', [Validators.required, CustomValidators.passwordValidation ] ],
      //passwordRepeat: [ '', [Validators.required, this.matchPassword.bind(this.form)] ],
      terms: [true]
    });
  }

  /*
    * Create pointers towards the form properties.
  */
  get nameField() {
    return this.form.get('name');
  }

  get dniField() {
    return this.form.get('dni');
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get passwordRepeatField() {
    return this.form.get('passwordRepeat');
  }

  get termsField() {
    return this.form.get('terms');
  }

}
