import { Router } from '@angular/router';
import { KhasraService } from './../services/khasra.service';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pattern ;
  errormessage ;

  constructor(private service : KhasraService , private router : Router) {
    this.pattern = '^\d{4}\s\d{4}\s\d{4}$';

  }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn')
  }

  search( data ) {

    this.service.search(data).subscribe(result => {
      console.log(result);

      if(result.bool){
        this.router.navigate(['/' , 'loan' , 'initiate']);
      } else {
        this.errormessage = result.message ;
      }
    })

  }


}
