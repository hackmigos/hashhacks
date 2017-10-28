import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'ngx-webstorage';
import { OtpService } from './../services/otp.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  errormessage ;

  constructor(private router: Router , private service : OtpService , private storage: SessionStorageService) { }

  verify(data) {

    console.log('Clicked');
    console.log(data);
    data.khasra_id = this.storage.retrieve('khasra').uid ;

    this.service.verify(data).subscribe( data => {
      if(data.message == 'ok') {
        this.router.navigate(['/' , 'contract' , 'scan']);
      } else {
        this.errormessage = 'Could Verify OTP' ;
      }
    } , err => {
      this.errormessage = err ;
    })



  }

  ngOnInit() {
  }

}
