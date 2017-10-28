import { KhasraService } from './../services/khasra.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class CanActivateDataGuard implements CanActivate {
    
    constructor(private service: KhasraService , private router : Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        console.log(route , state);
        
        if(this.service.isSearchData() && this.service.isLoanData() ){
            // this.router.navigate(['/' , 'contract',  'submit'])
            return true ;
        } else if ( this.service.isSearchData() ) {
            // this.router.navigate(['/' , 'loan',  'initiate'])
            return true ;
        }
        this.router.navigate(['/' , 'home'])
        return true;
    }
}