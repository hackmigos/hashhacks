import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMessage ;

  constructor(private service : AuthService , private router : Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn')){
      this.router.navigate(['/' , 'home'])
    }
    
  }

  login(data) {
    console.log(data);
    this.service.login(data).subscribe(data => {
      if (data == 'OK' ) {
        this.router.navigate(['/' , 'home']);
      } else if ( !data.success ) {
        this.errorMessage = data.message ;
      }

    });

    
  }

}
