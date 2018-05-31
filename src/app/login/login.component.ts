import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onSubmit(value: any){
    console.log(value);
    return false;
  }
  
  ngOnInit() {
    return false;
  }

}
