import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    private url = "http://localhost:3000/api" ;

    constructor(private http: Http , private storage: LocalStorageService) {    }

    isLoggedIn() {
        return localStorage.getItem('isLoggedIn')
    }

    login ( data ) {
        return this.http.post(this.url + '/auth/login' , data)
        .map(res => {
            var data = res.json() ;
            console.log(data);
            if (data.success) {
                localStorage.setItem('token' , data.token)
                localStorage.setItem('isLoggedIn' , 'true')
                this.storage.store('user' , data.user );
                return 'OK' 
            } else {
                return data ;
            } 
                        
        })
    }

    signup ( data ) {
        return this.http.post(this.url + '/auth/signup' , data)
        .map(res => {
            var data = res.json() ;
            console.log(data);
            if (data.success) {
                return 'OK' 
            } else {
                return data ;
            } 
                        
        })
    }

    

    logout () {
        localStorage.clear() ;
    }
    
}