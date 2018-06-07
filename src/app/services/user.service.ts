import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) { }
  private url:string;
  
  userRegister(data){
    this.url='register';
    return this.httpService.postRegister(this.url,data);
  }

  userLogin(data){
    this.url='login';
    return this.httpService.postLogin(this.url,data);
  }
}
