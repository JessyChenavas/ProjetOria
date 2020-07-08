import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestService} from "./rest.service";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService extends RestService {
  constructor(protected http: HttpClient, protected tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService);
  }

  /**
   * Create request
   */
  public createRequest(): Observable<any> {
    return new Observable<any>(observer => {
      this.post<any>('api/requests', {}).subscribe(result => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
