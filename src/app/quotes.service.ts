
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Quotes }  from './data.configuration';
import { map } from 'rxjs/operators';
 
 
 

 @Injectable({
     providedIn: 'root'
})



export class QuotesService{

     
      
    constructor(private http: HttpClient) {}    


    getQuotesData () : Observable<any>{ 
        return this.http.get<Quotes[]>('http://localhost:4200/assets/quotes.json'); 
    } 

    getQuote (authorId) : Observable<any>{    
        return this.http.get<Quotes[]>('http://localhost:4200/assets/quotes.json');
                  
    }
    getAuthorListData () : Observable<any>{  
        return this.http.get<Quotes[]>('http://localhost:4200/assets/quotes.json');
                  
    }  
     
}