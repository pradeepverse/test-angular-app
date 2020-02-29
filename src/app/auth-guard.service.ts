import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthServiceService, private router: Router) { }

  canActivate(){
    if(this.auth.isUserSignedIn()){
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;
  }

}
