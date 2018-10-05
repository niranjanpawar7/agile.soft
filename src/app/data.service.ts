import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Quotes }  from './data.configuration';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})

export class DataService {

    constructor(private http: HttpClient){}

    userSaveData(data){   
        return this.http.post('http://localhost:5000/users/savedata', data); 
    };

    login(data){ 
        return this.http.post('http://localhost:5000/users/login', data); 
    };
 
    getUserData(token){
        // let data = {token:token }; 
        let data = null;
        return this.http.post('http://localhost:5000/users/userData', data); 
    }
    

    

}