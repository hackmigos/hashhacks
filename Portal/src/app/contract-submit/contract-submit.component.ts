import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-submit',
  templateUrl: './contract-submit.component.html',
  styleUrls: ['./contract-submit.component.css']
})
export class ContractSubmitComponent implements OnInit {

  constructor(private router: Router , private storage: SessionStorageService ) { }

  ngOnInit() {
  }

  submit(data) {
    console.log(data);
    this.storage.store('loan' , data ) ;
    this.router.navigate(['/' , 'contract' , 'party'])
  }

}
