import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  // convenience getter for easy access to form fields
  get f() {

    return this.form.controls;
  }

  ngOnInit(): void {

    if (this.authService.currentUserValue) {

      this.authService.redirectToMain();
    }

    this.form = this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      emailConfirm: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    if (this.f.email.value === this.f.emailConfirm.value
        && this.f.password.value === this.f.passwordConfirm.value) {

      this.loading = true;
      this.authService.registerUser(this.f.email.value, this.f.name.value, this.f.password.value)
        .then(result => {

          this.authService.redirectToMain();
        }, error => {

          this.loading = false;
          window.alert(`SignUp error`);
        });
    } else {

      this.loading = false;
      window.alert(`Invalid signIn data`);
    }
  }
}
