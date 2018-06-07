import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {
  constructor(private httpService:HttpService) { }
  private url:string;
  
  getList(){
    //return this.http.get('http://localhost/atxanalist/api/getemployments');
    this.url='getemployments';
    return this.httpService.getData(this.url);
  }

  getDetail(id){
    
    this.url='getemployee';
    return this.httpService.getDetailData(this.url,id);
  }

  postComment(data,id){
    this.url='employmentcomment';
    return this.httpService.postComment(this.url,data,id);
  }

  getcomments(id){
    this.url='comments';
    return this.httpService.getComments(this.url,id);
  }
}
