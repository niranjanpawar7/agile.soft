import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { Routes, RouterModule} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { FormsModule } from '@angular/forms'; 
import { FilterPipe } from '../filter.pipe';
 





const routes: Routes = [ 
    {
      path:'', component: QuotesComponent, 
      canActivate: [AuthGuard],  
      canActivateChild: [AuthGuard],

       // if children exist use this,
        
      // children: [{ 
      //       path: '', 
      //       children: [{
      //               path: 'quotes',
      //               component: QuotesComponent,
      //           }]
      //   }]
    
  }			 
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
  ],
  declarations: [
      QuotesComponent,
       FilterPipe
  ],
   
})


export class QuotesModule { 

}
