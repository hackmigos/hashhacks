import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent{
  title = 'app';
  user ;

  constructor( private router : Router  , private storage : LocalStorageService){
    
  }

  isLoggedIn(){
    return(localStorage.getItem('isLoggedIn'));
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/'])
  }

  getuser(){
    this.user = this.storage.retrieve('user');
  }



}
