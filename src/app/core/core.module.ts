import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalTopToolbarComponent } from './components/principal-top-toolbar/principal-top-toolbar.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PrincipalTopToolbarComponent,
    HomeComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrincipalTopToolbarComponent
  ]
})
export class CoreModule { }
