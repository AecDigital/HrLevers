import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamMemberProfileComponent } from './team-member-profile/team-member-profile.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MemberComponent } from './member/member.component';
import { DevelopPlanComponent } from './develop-plan/develop-plan.component';
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'team-member/:id', component: TeamMemberProfileComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'member/:id', component: MemberComponent},
  { path: 'develop-plan/:id', component: DevelopPlanComponent}
];
