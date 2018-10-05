import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {
  }

  user = {
    name : '',
    contact: '',
    email: '',
    password: '' 
  };

  saveData(){ 
    this.dataService.userSaveData(this.user)
    .subscribe(
      (response) => {  
          console.log(response);
          this.router.navigate(['login']);
      },
      (error) => {
          console.log(error);
      }
    );
  }

}
