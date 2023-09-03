import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../../hp-share/src/lib/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
const FORM_FIELD = {
  email: 'email',
  password: 'password'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly FORM_FIELD = FORM_FIELD;

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
  ) {
    this.loginForm = this.formBuilder.group({
      [FORM_FIELD.email]: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      [FORM_FIELD.password]: ['123456', [Validators.required]],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  ngOnInit() {


    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
  }

  // convenience getter for easy access to form fields
  // get f() {
  //   return this.loginForm.controls;
  // }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.loginUserName({
      //     username: this.f.email.value,
      //     password: this.f.password.value,
      //     isRememberMe: true
      //   }).subscribe(() => {
      //     this.router.navigate(['/dashboard']);
      //   }, (error) => {
      //     console.log(error)
      //     this.error = error ? error : '';
      //   });
      // } else {
      //   this.authFackservice.login(this.f.email.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //       data => {
      //         this.router.navigate(['/dashboard']);
      //       },
      //       error => {
      //         this.error = error ? error : '';
      //       });
      // }
    }
  }

}
