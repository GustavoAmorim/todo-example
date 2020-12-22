import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ItemsListComponent } from './todo/components/items-list/items-list.component';

import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [

  { path: 'todo', component: ItemsListComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
