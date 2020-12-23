import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal-top-toolbar',
  templateUrl: './principal-top-toolbar.component.html',
  styleUrls: ['./principal-top-toolbar.component.scss']
})
export class PrincipalTopToolbarComponent implements OnInit {

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  get isLogged() {

    return !!this.authService.currentUserValue;
  }

  userLogout() {

    this.authService.logout(this.authService.currentUserValue.email).then();
  }
}
