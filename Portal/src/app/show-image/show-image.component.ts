import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  document ;

  constructor(private storage : SessionStorageService , private sanitizer: DomSanitizer , private router:Router) {

  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    let temp = this.storage.retrieve('khasra')['document_link'] ;
    console.log(this.document);
    console.log(this.router.url);
    // if(this.router.url == '/contract/view'){
    //   temp = temp.replace('.' , '_final.');
    // }
    this.document = temp ;
  }



}
