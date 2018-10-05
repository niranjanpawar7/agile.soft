
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { HttpClientModule }    from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service'; 
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { AuthorComponent } from './author/author.component';
import { LoginlinksComponent } from './loginlinks/loginlinks.component'; 

 
 
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RegistrationComponent,
    DashbaordComponent, 
    QuotesDetailComponent,
    AuthorComponent,
    LoginlinksComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
