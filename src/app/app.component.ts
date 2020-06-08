import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/token-storage.service';
import {AppStateService} from './services/app-state.service';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjetOria';

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService, private appState: AppStateService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    /*this.authService.isTokenValid().subscribe(result => {
      console.log("RES");
      this.appState.isLogged = !!this.tokenStorageService.getToken();
    }, error => {
      console.log("TOKEN INVALID");
      this.router.navigate(['login']);
    });*/
  }
}
