import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/auth-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogOutPageComponent } from './pages/logOut-page/log-out-page/log-out-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    LogOutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
