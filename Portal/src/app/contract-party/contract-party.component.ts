import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-party',
  templateUrl: './contract-party.component.html',
  styleUrls: ['./contract-party.component.css']
})
export class ContractPartyComponent implements OnInit {

  aadhar ;
  khasra ;
  loan ;
  bank

  constructor(private router: Router , private storage : SessionStorageService) { }

  ngOnInit() {
    this.aadhar = this.storage.retrieve('aadhar')
    this.khasra = this.storage.retrieve('khasra')
    this.loan = this.storage.retrieve('loan')
    this.bank = this.storage.retrieve('bank')
  }

  proceed(){
    
    this.router.navigate(['/' , 'contract' , 'details'])
  }

}
