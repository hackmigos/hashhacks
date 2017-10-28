import { KhasraService } from './../services/khasra.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(private router : Router , private service : KhasraService) { }

  ngOnInit() {
  }

  finger(){
    console.log('Scanning FingerPrint');

    this.service.submit().subscribe(data => {
      console.log(data);
      console.log('debug');
      this.router.navigate(['/' , 'contract' , 'success'])

      // TODO : Expect a success id
      // and clear session storage
      // and expect a final pdf link

    } , error => {

    }) ;
    // this.router.navigate(['/' , 'contract' , 'success']);


  }

}
