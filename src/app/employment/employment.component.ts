import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploymentService } from '../services/employment.service';
import { SESSION_STORAGE,StorageServiceModule } from 'ngx-webstorage-service';

@Component({
  selector: 'app-employement',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  public employments;
  
  
  constructor( private employmentservice: EmploymentService ,private router: Router) { }
  getEmploymentList(): void {
    this.employmentservice.getList().subscribe(
      data => { 
        this.employments = data['data'];
        
      },
      err => console.error(err),
      () => console.log('done loading employments')
    );
  }

  ngOnInit() {
   if ((sessionStorage.getItem('email') === null) ) {
    this.router.navigate(['/login']);
    } else{
      this.getEmploymentList();
    }
    
  }

  onSelect(employment){
    this.router.navigate(['/employee', employment.id]);
  }
}
