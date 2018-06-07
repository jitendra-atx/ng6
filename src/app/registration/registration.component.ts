import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user;
  public error;
  public message;
  public status;
  constructor(private userservice: UserService,private router: Router) { }
  onSubmit(value: any){
    this.userservice.userRegister(value).subscribe(
      data => { 
        this.user = data['user'];
        this.message=data['message'];
        this.status=data['status'];
        sessionStorage.setItem('email',data['user'].email);
        sessionStorage.setItem('id',data['user'].id);
        sessionStorage.setItem('name',data['user'].name);
        sessionStorage.setItem('token',data['success'].token);
        this.router.navigate(['/dashboard']);
      },
      err => { 
        this.error=err['error']['error'];
        console.log(err['error']['error']);
      },
      () => console.log('done loading user')
    );
  }

  ngOnInit() {
    if ((sessionStorage.getItem('email') === null) ) {
      console.log('register');
    } else{
      this.router.navigate(['/dashboard']);
    }
    return false;
  }

}
