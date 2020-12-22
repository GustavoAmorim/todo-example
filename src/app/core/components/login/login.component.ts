import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable, of, Subscription, pipe } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit() {

    if (this.authService.currentUserValue) {

      this.authService.redirectToMain();
    }

    this.form = this.formBuilder.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {

    return this.form.controls;
  }

  redirectToRegister() {

    this.authService.redirectToRegister();
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .then(result => {

        this.authService.redirectToMain();
      }, error => {

        window.alert(`Não foi possivel logar`);
      })
  }
}
