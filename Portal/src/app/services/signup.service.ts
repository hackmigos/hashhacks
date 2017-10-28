import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {

    private url = "http://localhost:3000/api/khasra/" ;

    constructor(private http: Http) {}

    get ( ) {
        return this.http.get(this.url + '/bankdetails')
        .map(res => {
            var data = res.json() ;
            console.log(data);
            data.forEach(element => {
                element.bank = element.bank.toLowerCase()
            });
            return data;
        })
    }
}
