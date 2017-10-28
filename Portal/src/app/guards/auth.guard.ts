import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    
    constructor(private auth: AuthService , private router : Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        console.log(route , state);
        
        if(this.auth.isLoggedIn() == 'true'){
            return true ;
        }
        this.router.navigate(['/'])
        return false;
    }
}