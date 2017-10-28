import { CanActivateDataGuard } from './guards/data.guard';
import { CanActivateRouteGuard } from './guards/auth.guard';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractSuccessComponent } from './contract-success/contract-success.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractPartyComponent } from './contract-party/contract-party.component';
import { ContractSubmitComponent } from './contract-submit/contract-submit.component';
import { ContractComponent } from './contract/contract.component';
import { ScanComponent } from './scan/scan.component';
import { OtpComponent } from './otp/otp.component';
import { LoanComponent } from './loan/loan.component';
import { InitiateComponent } from './initiate/initiate.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router' ;

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login' , component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent
  } , 
  {
    path: 'home',
    component: HomeComponent ,
    canActivate: [CanActivateRouteGuard] 
  } ,
  {
    path: 'loan',
    component: LoanComponent ,
    canActivate: [CanActivateRouteGuard ,CanActivateDataGuard] ,
    children: [
      { path: 'initiate', component: InitiateComponent }
    ]
  } ,
  {
    path: 'contract',
    component: ContractComponent ,
    canActivate: [CanActivateRouteGuard , CanActivateDataGuard] ,
    children: [
      { path: 'submit', component: ContractSubmitComponent },
      { path: 'party', component: ContractPartyComponent } ,
      { path: 'details', component: ContractDetailsComponent } ,
      { path: 'success', component: ContractSuccessComponent } ,
      { path: 'view', component: ContractViewComponent } ,
      { path: 'otp', component: OtpComponent } ,
      { path: 'scan', component: ScanComponent }
    ]
  } ,
  {path: '**', component: LoginComponent}
  
];
