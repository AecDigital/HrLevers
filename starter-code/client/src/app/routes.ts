import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';



export const routes: Routes = [
  { path: '', component: EmployeesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: SingleThreadComponent},
  { path: 'experiences', component: ExperiencesComponent}
];
