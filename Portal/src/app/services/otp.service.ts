import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OtpService {

    private url = "http://localhost:3000/api/otp" ;

    constructor(private http: Http , private storage: SessionStorageService) {

    }

    send ( data ) {

        return this.http.post(this.url + '/send' , data)
        .map(res => {
            console.log(res.json())
            // this.storage.store('result' , res.json()) ;
            return res.json() ;
        })
    }

    verify ( data ) {

        return this.http.post(this.url + '/verify' , data)
        .map(res => {
            console.log(res.json())
            // this.storage.store('result' , res.json()) ;
            return res.json() ;
        })
    }

}
