import { Component, OnInit } from '@angular/core';
import { EmploymentService } from '../services/employment.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employmentdetail',
  templateUrl: './employmentdetail.component.html',
  styleUrls: ['./employmentdetail.component.css']
})
export class EmploymentdetailComponent implements OnInit {
  public employee;
  public comments;


  id: string;
  employee_id: number;
  
  constructor(private route: ActivatedRoute,private employmentservice: EmploymentService,private router: Router) {
    if(! this.employee){this.employee={}}
   }

  submitComment(form: any){
    
    form.value.user_id=sessionStorage.getItem('id');
    this.employmentservice.postComment(form.value,this.id).subscribe(
      data => { this.comments = data['data'];
      
      console.log(this.comments);},
      err => console.error(err),
      () => console.log('done loading comments')
    );
    form.resetForm();
    return false;
  }

  getEmployeeDetail(id): void {
    
    this.employmentservice.getDetail(id).subscribe(
      data => { 
        this.employee = data['data'];
        
      },
      err => console.error(err),
      () => console.log('done loading employments')
    );
  }

  getComments(id):void{
    this.employmentservice.getcomments(id).subscribe(
      data => { this.comments = data['data'];console.log(this.comments);},
      err => console.error(err),
      () => console.log('done loading comments')
    );
  }

  ngOnInit() {
    if ((sessionStorage.getItem('email') === null) ) {
      this.router.navigate(['/login']);
      }
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.getEmployeeDetail(this.id);
    this.getComments(this.id);
  }

}
