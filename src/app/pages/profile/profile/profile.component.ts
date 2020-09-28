// Native Angular
import { Component, OnInit, OnDestroy, ViewChild, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

// Services
import { UserService } from '../../../core/user/user.service';
import { ToastService } from '../../../core/notifications/toast.service';

// Class
import { User } from 'src/app/models/user.model';

// Rxjs and Operators
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { UploadService } from '../../../core/upload/upload.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('password', {static: true}) public password: NgModel;
  @ViewChild('newPassword', {static: true}) public newPassword: NgModel; 
  public passwordValue: string;
  public newPasswordValue: string;

  public user: User;
  public form: FormGroup;
  private file: File;
  public imgSelected: string | ArrayBuffer;
  private userSubscription: Subscription = new Subscription();
  private passwordSubscription: Subscription = new Subscription();
  private newPasswordSubscription: Subscription = new Subscription();


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private uploadService: UploadService,
    private toast: ToastService
  ) { 
    this.buildForm();
    this.userService.getMe();
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe( (user: User) => {
      this.user = user;
      this.form.patchValue(this.user);
    });
  }

  ngAfterContentInit(): void {
    this.passwordSubscription = this.password.valueChanges.pipe(debounceTime(500))
                                             .subscribe( (password: string) => this.form.patchValue({ password: password }));

    this.passwordSubscription = this.newPassword.valueChanges.pipe(debounceTime(500))
                                                .subscribe( (newPassword: string) => this.form.patchValue({ newPassword: newPassword })); 
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.passwordSubscription.unsubscribe();
    this.newPasswordSubscription.unsubscribe();
  }

  updateUser(): void {
    console.log(this.form);

    if(this.form.invalid) return;

    let user = this.form.value;

    if(!user.password || !user.newPassword ) {
      delete user.password;
      delete user.password;
    }

    this.userService.update(user)
                    .subscribe( 
                      (data: string) => this.toast.success(data),
                      err => this.toast.error(err)
                    );
  }

  onImgSelected( event: HtmlInputEvent ): void {

    if ( event.target.files && event.target.files[0] ) {
      this.file = event.target.files[0] as File;
    };

    const reader = new FileReader();
    reader.onload = e => this.imgSelected = reader.result;
    reader.readAsDataURL(this.file);

    this.uploadService.uploadImages(this.user.id, 'users', this.file)
                        .subscribe( 
                          (data: string) => {
                            this.userService.getMe();
                            this.toast.success(data);
                            this.file = null;
                        }, 
                          err => this.toast.error(err)
                        );

  }

  /*
    * Constructor Form
  */
  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: [ '', [Validators.required] ],
      name: [ '', [Validators.required] ],
      email: [ '', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] ],
      dni: [ '', [Validators.required, Validators.minLength(7)] ],
      phone: [ '', [] ],
      password: [ '', [] ],
      newPassword: [ '', [] ],
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
