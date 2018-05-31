import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private apiUrl = 'http://localhost/atxanalist/api/';
  private reuestUrl: string;
  private data:string;

  constructor(private http: HttpClient) { }
  
  // global data get function for http service
  getData(url): Observable<any> {
    this.reuestUrl=this.apiUrl+url;
      return this.http.get(this.reuestUrl,httpOptions);
  }

  getDetailData(url,id): Observable<any> {
    let params = new HttpParams();
    
    this.reuestUrl=this.apiUrl+url+'/'+id;
    
    return this.http.get(this.reuestUrl,httpOptions);
  }

}
