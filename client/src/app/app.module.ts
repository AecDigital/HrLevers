import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AllthreadsService } from '../services/allthreads.service';
import { routes } from './routes';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from '../services/authentication.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { EmployeesComponent } from './employees/employees.component';
import { AllemployeesService } from 'services/allemployees.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from 'services/projects.service';
import { TasksService } from 'services/tasks.service';
import { TasksComponent } from './tasks/tasks.component';
import { ExperiencesService } from 'services/experiences.service';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EmployeesCountComponent } from './employees-count/employees-count.component';
import { ProjectsCountComponent } from './projects-count/projects-count.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfocounterComponent } from './infocounter/infocounter.component';
import { LinealChartComponent } from './lineal-chart/lineal-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TeamMemberProfileComponent } from './team-member-profile/team-member-profile.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { SkillsService } from 'services/skills.service';
import { MemberComponent } from './member/member.component';
import { BarCharComponent } from './bar-char/bar-char.component';
import { HorizontalbarComponent } from './horizontalbar/horizontalbar.component';
import { SafeVideosPipe } from './safe-videos.pipe';
import { DevelopPlanComponent } from './develop-plan/develop-plan.component';
import { HomeComponent } from './home/home.component';








@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    EmployeesComponent,
    ProjectsComponent,
    TasksComponent,
    ExperiencesComponent,
    EmployeesCountComponent,
    ProjectsCountComponent,
    DashboardComponent,
    InfocounterComponent,
    LinealChartComponent,
    PieChartComponent,
    TeamMemberProfileComponent,
    NewTaskComponent,
    PolarChartComponent,
    MemberComponent,
    BarCharComponent,
    HorizontalbarComponent,
    SafeVideosPipe,
    DevelopPlanComponent,
    HomeComponent
    // Ng2SearchPipeModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // NgbModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [ AllemployeesService, ProjectsService, AuthenticationService, TasksService, ExperiencesService, SkillsService,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
