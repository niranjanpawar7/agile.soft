import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { QuotesService }  from '../quotes.service'
import { Quotes } from '../data.configuration'

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit { 
   
  quotes : any[] =  [] ; 
  quote : any[] =  [] ; 
  singleQuate = null;
  constructor(private route:ActivatedRoute, private quotesService:QuotesService, private router: Router) { }

  ngOnInit() {
       
    let tokan = localStorage.getItem('usertoken');
    this.getQuoteDetail()
   
  }
  
  getQuoteDetail() : void {    
  
       const authorId = this.route.snapshot.paramMap.get('id');
       
        this.quotesService.getQuote(authorId)
        .subscribe(

            (quotes) =>{ 

                  this.quote = quotes;  // created empty array to store the object
                  this.quote.map(items =>{ 
                      if (items.author.id == authorId){ 
                          this.singleQuate = items;
                          return this.singleQuate; // return data in singleQuate
                      }
                  })
            }, 

            (error) =>{
                console.log(error);
            } 
          
          )
          
          

    }

    Logout(){
        localStorage.removeItem('usertoken'); 
         this.router.navigate(['login']);
    };
};

   

 
 
