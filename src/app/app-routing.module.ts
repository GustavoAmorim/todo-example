import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ItemsListComponent } from './todo/components/items-list/items-list.component';

import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth-guard';
import { HomeComponent } from './core/components/home/home.component';

import { ReadingBooksComponent } from './books/components/reading-books/reading-books.component';

const routes: Routes = [

  { path: 'products', component: ItemsListComponent, canActivate: [AuthGuard]  },
  { path: 'books', component: ReadingBooksComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
