import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-success',
  templateUrl: './contract-success.component.html',
  styleUrls: ['./contract-success.component.css']
})
export class ContractSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  view(){
    this.router.navigate(['/' , 'contract' , 'view'])
  }

  ngOnInit() {
  }

}
