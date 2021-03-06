
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule }  from '@angular/common/http';  
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service'; 
 
import { AuthorComponent } from './author/author.component';
import { LoginlinksComponent } from './loginlinks/loginlinks.component'; 
import { AuthInterceptors } from './auth/auth.interceptor';

 
 
 
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RegistrationComponent,
    DashbaordComponent,  
    AuthorComponent,
    LoginlinksComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [AuthGuard, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptors,
    multi : true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
