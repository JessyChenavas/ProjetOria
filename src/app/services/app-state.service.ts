import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public isLogged = false;

  public user = undefined;

  constructor() {
  }

  isLoggedIn() {
    return this.isLogged;
  }
}
