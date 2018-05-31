import { Component, OnInit } from '@angular/core';
import { EmploymentService } from '../services/employment.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employmentdetail',
  templateUrl: './employmentdetail.component.html',
  styleUrls: ['./employmentdetail.component.css']
})
export class EmploymentdetailComponent implements OnInit {
  public employee;
  id: string;
  
  constructor(private route: ActivatedRoute,private employmentservice: EmploymentService) { }

  getEmployeeDetail(id): void {
    
    this.employmentservice.getDetail(id).subscribe(
      data => { this.employee = data['data'];},
      err => console.error(err),
      () => console.log('done loading employments')
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.getEmployeeDetail(this.id);
    
  }

}
