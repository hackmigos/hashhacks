import { OtpService } from './../services/otp.service';
import { KhasraService } from './../services/khasra.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  aadhar ;
  khasra ;
  loan ;
  bank ;
  isclicked ;
  errormessage ;

  constructor(private router: Router ,private service : OtpService ,private storage : SessionStorageService) { }

  ngOnInit() {
    this.aadhar = this.storage.retrieve('aadhar')
    this.khasra = this.storage.retrieve('khasra')
    this.loan = this.storage.retrieve('loan')
    this.bank = this.storage.retrieve('bank')
  }

  proceed(){

    var data = {} ;

    data['khasra_id'] = this.storage.retrieve('khasra').uid ;
    data['mobile'] = this.storage.retrieve('aadhar').phone ;
    this.isclicked = true ;
    
    this.service.send(data).subscribe( data => {
      if(data.message == 'ok') {
        this.router.navigate(['/' , 'contract' , 'otp']);
      } else {
        this.errormessage = 'Could Send OTP' ;
        this.isclicked = false ;
      }
    } , err => {
      this.errormessage = err ;
      this.isclicked = false ;
    })

    // this.router.navigate(['/' , 'contract' , 'success'])
  }

}
