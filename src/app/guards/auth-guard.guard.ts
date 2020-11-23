import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(private afa: AngularFireAuth, private route: Router)
  {

  }
  canActivate(): Observable<boolean>
  {


    return this.afa.authState.pipe(map(auth=>
      {
        if(!auth)
        {
          this.route.navigate(['/login']);
          return false;
        }
        else
        {
          return true;
        }
      }))
    }
  
}
