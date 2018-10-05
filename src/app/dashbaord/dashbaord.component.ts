import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})

export class DashbaordComponent implements OnInit {

  userDetail = {};

  constructor(private dataService : DataService, private router: Router)  { }

  ngOnInit() { 
    
        let token = localStorage.getItem('usertoken');

        this.dataService.getUserData(token)
        .subscribe( 
          (response) => {  
              this.userDetail['name'] = response[0].username;
              this.userDetail['password'] = response[0].password
              this.userDetail['contact'] = response[0].contact; 
              this.userDetail['email'] = response[0].email;  
          },
          (error) => {
              console.log(error);
          }
        )
         

  }

  Logout(){ 
      localStorage.removeItem('usertoken');
      this.router.navigate(['login']);
  }

}
