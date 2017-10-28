import { SignupService } from './../services/signup.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  banks ;
  branches ;

  public errorMessage ;

  constructor(private service : AuthService , private router : Router , private data : SignupService) { }

  ngOnInit() {

    this.data.get().subscribe( data => {
      console.log('data' , data)
      this.banks = data ;
    } , err => {
      console.error(err);
    })


  }

  onchange(value){
    console.log(value);
    this.branches = this.banks.filter(bank => bank.bank == value);
    console.log(this.branches)
  }

  signup(data) {
    console.log(data);
    this.service.signup(data).subscribe(data => {
      if (data == 'OK' ) {
        this.router.navigate(['/login']);
      } else if ( !data.success ) {
        this.errorMessage = data.message ;
      }

    });
  }

}
