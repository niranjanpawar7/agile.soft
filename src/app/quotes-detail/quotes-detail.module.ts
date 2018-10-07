import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesDetailComponent}  from './quotes-detail.component';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


const routes: Routes = [ 
      {path:'', component: QuotesDetailComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },  
];


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [QuotesDetailComponent]
})


export class QuotesDetailModule {}
