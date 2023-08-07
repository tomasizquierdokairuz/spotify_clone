import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-out-page',
  templateUrl: './log-out-page.component.html',
  styleUrls: ['./log-out-page.component.css']
})
export class LogOutPageComponent implements OnInit {


  constructor(private authService: AuthService, 
    private cookie: CookieService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.sendLogout()
      }


      sendLogout(): void {
        setTimeout(() => {
        this.cookie.delete('token','/')
        this.cookie.delete('ROLE','/')
        this.router.navigate(['/auth', 'login'])
      }, 2000);

      } 
  }
