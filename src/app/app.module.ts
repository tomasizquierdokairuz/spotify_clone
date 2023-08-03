import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

@NgModule({
  declarations: [//declaraciones, componentes, directivas, ípes,etc
    AppComponent
  ],
  imports: [ //Solo se importan otros módulos
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InjectSessionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
