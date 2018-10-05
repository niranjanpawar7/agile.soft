import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptors implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
        
            const idToken = localStorage.getItem('usertoken');

            if(idToken)
            { 
                req = req.clone({
                    headers : req.headers.set('authorization', 'Bearer' + '_'   + idToken)
                });

                return next.handle(req);
                
            }
            else
            {
                return next.handle(req);
            } 
    }
}
 