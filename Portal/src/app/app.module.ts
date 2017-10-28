import { SignupService } from './services/signup.service';
import { CanActivateDataGuard } from './guards/data.guard';
import { CanActivateRouteGuard } from './guards/auth.guard';
import { OtpService } from './services/otp.service';
import { KhasraService } from './services/khasra.service';
import { AuthService } from './services/auth.service';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http' ;
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ShowImageComponent } from './show-image/show-image.component';
import { InitiateComponent } from './initiate/initiate.component';
import { LoanComponent } from './loan/loan.component';
import { OtpComponent } from './otp/otp.component';
import { ScanComponent } from './scan/scan.component';
import { ContractComponent } from './contract/contract.component';
import { ContractSubmitComponent } from './contract-submit/contract-submit.component';
import { ContractPartyComponent } from './contract-party/contract-party.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractSuccessComponent } from './contract-success/contract-success.component';
import { ContractViewComponent } from './contract-view/contract-view.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LandingComponent,
    ShowImageComponent,
    InitiateComponent,
    LoanComponent,
    OtpComponent,
    ScanComponent,
    ContractComponent,
    ContractSubmitComponent,
    ContractPartyComponent,
    ContractDetailsComponent,
    ContractSuccessComponent,
    ContractViewComponent
  ],
  imports: [
    BrowserModule ,
    Ng2Webstorage ,
    FormsModule ,
    HttpModule ,
     RouterModule.forRoot(
       appRoutes
     )
  ],
  providers: [
    AuthService ,
    KhasraService ,
    OtpService ,
    SignupService ,
    CanActivateRouteGuard ,
    CanActivateDataGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
