import { OtpService } from './../services/otp.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.css']
})
export class InitiateComponent implements OnInit {
  
  errormessage ;
  isclicked ;

  constructor(private router : Router , private storage : SessionStorageService  ,private service : OtpService) { }
  
  submit() {
    console.log('Clicked');
    var data = {} ;
    
    this.router.navigate(['/' , 'contract' , 'submit']);
    
  }
  
  ngOnInit() {
  }
  
}
