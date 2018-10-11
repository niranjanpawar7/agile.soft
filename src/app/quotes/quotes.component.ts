import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service'; 
import { DataService } from '../data.service';
import {Router} from "@angular/router" 
import { Observable } from 'rxjs'; 
import { Quotes } from '../data.configuration'; 
 


 


@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})


export class QuotesComponent implements OnInit {
    userDetail = {};
    quotes: Quotes; 
    allData :  Quotes[];
    onlyAthour :  Quotes[];
    myNewList :Quotes[];
    uniqueAuthorList :any[] = []; 
    listedData : any[] = [];
    PushData : any[] = [];
    

    constructor(private quotesService:QuotesService, private dataService : DataService, private router: Router) { }

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
         
        this.getAllQuotesData();  
    }

    getAllQuotesData(){   
        this.quotesService.getQuotesData()
        .subscribe(
            (allData) => 
                {    
                    this.allData = allData;    
                },

                (error) =>
                { 
                    console.log('error', error);
                }     
        );

    } // getquoteDaaata ends


   

    
  
   Logout(){ 
      localStorage.removeItem('usertoken');
      this.router.navigate(['login']);
  }



  filterStatus : '';
}
