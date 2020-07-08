import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {TokenStorageService} from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected webservicesUrl = '';



  protected constructor(protected http: HttpClient, protected tokenStorageService: TokenStorageService) {
    this.webservicesUrl = environment.wsUrl;
  }

  /**
   * Add token to header
   */
  protected get headers(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (this.tokenStorageService.getToken()) {
      headers = headers.set('X-AUTH-TOKEN', this.tokenStorageService.getToken());
    }

    return headers;
  }


  /**
   * Appel GET
   */
  protected get<T>(path: string, params: any): Observable<T> {
    return this.http.get<T>(this.webservicesUrl + path, {
      headers: this.headers,
      responseType: 'json',
      withCredentials: true,
      observe: 'response'
    }).pipe(
      tap((res) => console.log('HTTP GET - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel POST
   */
  protected post<T>(path: string, data: object): Observable<T> {
    return this.http.post<T>(this.webservicesUrl + path, data, {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
        observe: 'response'
      }
    ).pipe(
      tap((res) => console.log('HTTP POST - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel PUT
   */
  protected put<T>(path: string, data: object): Observable<T> {
    return this.http.put<T>(this.webservicesUrl + path, data, {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
        observe: 'response'
      }
    ).pipe(
      tap((res) => console.log('HTTP PUT - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Appel DELETE
   */
  protected del<T>(path: string): Observable<T> {
    return this.http.delete<T>(this.webservicesUrl + path, {
      headers: this.headers,
      responseType: 'json',
      withCredentials: true,
      observe: 'response'
    }).pipe(
      tap((res) => console.log('HTTP DEL - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Gestion basique des erreurs
   */
  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      const obs: Observable<T> = new Observable<T>(observer => {
        observer.error(error);
        observer.next(error);
      });
      // Let the app keep running by returning an empty or null result (to be defined by method call).
      return obs;
    };
  }

  // /**
  //  * Map params
  //  */
  // protected mapParameters(path: string, params?: object): string {
  //   if (params) {
  //     for (const key in params) {
  //       if (params.hasOwnProperty(key)) {
  //         path = path.replace(':' + key, params[key]);
  //       }
  //     }
  //   }
  //   return path;
  // }
}
