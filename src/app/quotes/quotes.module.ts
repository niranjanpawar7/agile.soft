import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { Routes, RouterModule} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';




const routes: Routes = [ 
    {
      path:'', component: QuotesComponent, 
      canActivate: [AuthGuard],  
      canActivateChild: [AuthGuard],
      
      children: [{ 
            path: '', 
            children: [{
                    path: 'quotes',
                    component: QuotesComponent,
                }]
        }]
    
  }			 
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuotesComponent],
   
})


export class QuotesModule { 

}
