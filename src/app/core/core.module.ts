import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [

    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
