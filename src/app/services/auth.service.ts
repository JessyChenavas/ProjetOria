import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  constructor(protected http: HttpClient, protected tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService);
  }
  /**
   * Récupération des évenements
   */
  public login(credentials): Observable<any> {
    console.log(credentials);
    return new Observable<any>(observer => {
      this.post<any>('auth/login', credentials).subscribe(result => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  public register(user): Observable<any> {
    return new Observable<any>(observer => {
      this.post<any>('auth/register', user).subscribe(result => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  public isTokenValid(): Observable<any> {
    return new Observable<any>(observer => {
      this.get<any>('auth/me', {}).subscribe(result => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
