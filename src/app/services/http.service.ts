import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
let httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json','Authorization':`Bearer `+sessionStorage.getItem('token')})};

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private apiUrl = 'http://localhost/atxanalist/api/';
  private restUrl: string;
  private data:string;

  constructor(private http: HttpClient) { }
  
  // global data get function for http service
  getData(url): Observable<any> {
    this.restUrl=this.apiUrl+url;
      return this.http.get(this.restUrl,httpOptions);
  }

  getDetailData(url,id): Observable<any> {
   
    this.restUrl=this.apiUrl+url+'/'+id;
    
    return this.http.get(this.restUrl,httpOptions);
  }

  postComment(url,data,id): Observable<any>
  {
    
    this.restUrl=this.apiUrl+url+'/'+id;
    
    return this.http.post(this.restUrl,data,httpOptions);
  }

  getComments(url,id):Observable<any>
  {
    this.restUrl=this.apiUrl+url+'/'+id;
    return this.http.get(this.restUrl,httpOptions);
  }

  postRegister(url,data):Observable<any>{
    this.restUrl=this.apiUrl+url;
    return this.http.post(this.restUrl,data,httpOptions);
  }

  postLogin(url,data):Observable<any>{
    this.restUrl=this.apiUrl+url;
    console.log(this.restUrl);
    return this.http.post(this.restUrl,data,httpOptions);
  }
}
