import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router"
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  errorMsg = '';
  loggedData;

  login = {
    email: '',
    password:''
  }
  constructor(private dataService : DataService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  userLogin(){  
     
      this.dataService.login(this.login)
      .subscribe(

        (response) => {  
        
           if(response && response['data'] && response['data'][0] && response['data'][0].email && response['data'][0].password){ 
               
              this.errorMsg = ''; 

              this.loggedData = response['data'][0]; 

              localStorage.setItem('usertoken', response['token']); 

              this.auth.sendToken(response['token']);
              this.router.navigate(['quotes']);

           } 
           else{
              this.errorMsg = 'Invalid username or password';
           }
          
        },
        (error) => {
          console.log(error);
        }
      ) 
  }

  

}
