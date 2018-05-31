import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  onSubmit(value: any){
    console.log(value);
    return false;
  }

  ngOnInit() {
    return false;
  }

}
