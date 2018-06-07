import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentdetailComponent } from './employmentdetail/employmentdetail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: EmploymentComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'employee/:id', component: EmploymentdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [HeroesComponent,RegistrationComponent,LoginComponent,EmploymentComponent,EmploymentdetailComponent];

