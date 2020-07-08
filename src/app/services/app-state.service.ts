import {Injectable} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public isLogged = false;

  public user = undefined;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  isLoggedIn() {
    return this.tokenStorageService.getToken() != null;
  }
}
