import { NgModule } from '@angular/core';
import {RouterModule, Routes, CanActivate, CanActivateChild } from  '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
 
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component'; 
import { AuthorComponent} from './author/author.component'; 

// auth gaurd
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

 
 


const routes: Routes = [
  {path:'quotes', loadChildren:'./quotes/quotes.module#QuotesModule'},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },  
  { path: 'dashboard', component: DashbaordComponent, canActivate: [AuthGuard]},
   
  { path: 'quotes/:id', component: QuotesDetailComponent , canActivate: [AuthGuard]}, 
  { path: 'quotes/author/:author', component: AuthorComponent, canActivate: [AuthGuard] } 
     
  
];

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
