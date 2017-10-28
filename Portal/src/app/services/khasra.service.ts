import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KhasraService {

  private url = "http://localhost:3000/api/khasra";

  constructor(private http: Http, private storage: SessionStorageService) {

  }

  search(data) {

    // data = {
    //     "aadhar_id" : "999999990019" ,
    //     "khasra_id" : "123456"
    // }

    return this.http.post(this.url + '/landrecord', data)
      .map(res => {
        var json = res.json();
        console.log(json);

        if (json.error) {
          return {
            message : json.error ,
            bool : false
          }
        }
        this.storage.store('khasra', res.json()['khasra_data']);
        this.storage.store('aadhar', res.json()['aadhar_data']);
        this.storage.store('bank', {
          'bank': 'SBI',
          'branch': 6870,
          'address': 'Baran',
          'employee_name': 'Saroj Bansal',
          'employee_id': 23412
        });
        return {
          bool : true ,
          message : ''
        };
      })
  }

  submit() {

    var data = {};
    data['aadhar'] = this.storage.retrieve('aadhar')
    data['khasra'] = this.storage.retrieve('khasra')
    data['loan'] = this.storage.retrieve('loan')

    console.log(data);
    console.log('1');


    return this.http.post(this.url + '/feedcontract', data)
      .map(res => {
        console.log(res.json());
        // this.storage.store('khasra' , res.json()['khasra_data']) ;
        // this.storage.store('aadhar' , res.json()['aadhar_data']) ;
        return res.json();
      })
  }

  isSearchData(): boolean {
    if (this.storage.retrieve('khasra') && this.storage.retrieve('khasra')) {
      return true;
    }
    return false;
  }


  isLoanData(): boolean {
    if (this.storage.retrieve('loan')) {
      return true;
    }
    return false;
  }

}
