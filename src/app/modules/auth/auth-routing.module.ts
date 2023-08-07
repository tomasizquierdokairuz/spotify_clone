import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth-page/login-page.component';
import { LogOutPageComponent } from './pages/logOut-page/log-out-page/log-out-page.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginPageComponent
  },
  {
    path: 'logout',
    component: LogOutPageComponent
    },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
