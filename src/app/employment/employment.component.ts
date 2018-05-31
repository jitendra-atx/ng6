import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploymentService } from '../services/employment.service';
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
      data => { this.employments = data['data'];},
      err => console.error(err),
      () => console.log('done loading employments')
    );
  }

  ngOnInit() {
    this.getEmploymentList();  
  }

  onSelect(employment){
    this.router.navigate(['/employee', employment.id]);
  }
}
