import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CareersComponent } from './components/careers/careers.component';
import { NewsComponent } from './components/news/news.component';
import { SoftwareComponent } from './components/software/software.component';


const routes: Routes = [{path:'SignIn',component:SignInComponent},
                        {path:'SignUp',component:SignUpComponent},
                        {path:'Software',component:SoftwareComponent},
                        {path:'Main',component:MainComponent,
                        children:[{path:'Employees',component:EmployeesComponent},
                                  {path:'Careers',component:CareersComponent},
                                  {path:'News',component:NewsComponent}]},
                        {path:'',redirectTo:'SignIn',pathMatch:'full'},
                        {path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
