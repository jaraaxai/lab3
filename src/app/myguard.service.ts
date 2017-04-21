import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {DbService} from './db.service';

@Injectable()
export class MyGuard implements CanActivate {

  constructor(private db: DbService) {}

  canActivate( route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    for (const key in this.db.getData()) {
      if ( this.db.getData()[key].id === route.params.id * 1) {
        return true;
      }
    }
    return false;
  }
}
