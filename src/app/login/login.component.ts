import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SESSION_STORAGE,StorageServiceModule } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public error;
  public message;
  public status;
  constructor(private userservice: UserService,private router: Router) { }

  onSubmit(value: any){
    this.userservice.userLogin(value).subscribe(
      data => { 
        this.user = data['user'];
        this.message=data['message'];
        this.status=data['status'];
        sessionStorage.setItem('email',data['user'].email);
        sessionStorage.setItem('id',data['user'].id);
        sessionStorage.setItem('name',data['user'].name);
        sessionStorage.setItem('token',data['success'].token);
        this.router.navigate(['/dashboard']);
        console.log(data);
    },
      err => { 
        this.error=err['error']['error'];
        console.log(err['error']);
      },
      () => console.log('done loading user')
    );
  }
  
  ngOnInit() {

    console.log(sessionStorage.getItem('email'));
    console.log(sessionStorage.getItem('id'));
    console.log(sessionStorage.getItem('name'));
    console.log(sessionStorage.getItem('token'));
    
    if ((sessionStorage.getItem('email') === null) ) {
      console.log('login');
    } else{
      this.router.navigate(['/dashboard']);
    }
    return false;
  }

}
