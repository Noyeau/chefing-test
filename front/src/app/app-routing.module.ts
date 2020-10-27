import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoConnectedComponent } from './pages/no-connected/no-connected.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,


  },
  {
    path: 'offline',
    component: NoConnectedComponent,
    children: [

      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'inscription',
        component: SigninComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
