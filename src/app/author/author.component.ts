import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Response } from '@angular/http';
import { QuotesService }  from '../quotes.service'
import { Quotes } from '../data.configuration'
 
 
 


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    authorName = null
    allData :  Quotes[];
    authorData : any[] = [];

  constructor(private quotesService : QuotesService, private  route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('usertoken');
     this.getAuthorlistblogs()
  }

  getAuthorlistblogs(){ 
   
     
     
     
     this.route.params.subscribe((params: Params) => { this.authorName = params['author']; });
    
      

    this.quotesService.getAuthorListData()
    .subscribe(
      (response) =>{
          this.allData = [];
          this.authorData = [];
           
          this.allData = response;
          
          this.allData.filter(Items =>{ 
              if(Items["author"]["name"] ==this.authorName)
              {  
                 this.authorData.push(Items);  
              }
          })

           
      },
      (error) =>{
          console.log('error', error);
      }
      ) 
  }

   Logout(){ 
      localStorage.removeItem('usertoken');
      this.router.navigate(['login']);
    }


}
