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
import { SingleThreadComponent } from './single-thread/single-thread.component';
import { EmployeesComponent } from './employees/employees.component';
import { AllemployeesService } from 'services/allemployees.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from 'services/projects.service';
import { TasksService } from 'services/tasks.service';
import { TasksComponent } from './tasks/tasks.component'
import { ExperiencesService } from 'services/experiences.service';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EmployeesCountComponent } from './employees-count/employees-count.component';
import { ProjectsCountComponent } from './projects-count/projects-count.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfocounterComponent } from './infocounter/infocounter.component';
import { LinealChartComponent } from './lineal-chart/lineal-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent,
    EmployeesComponent,
    ProjectsComponent,
    TasksComponent,
    ExperiencesComponent,
    EmployeesCountComponent,
    ProjectsCountComponent,
    DashboardComponent,
    InfocounterComponent,
    LinealChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AllemployeesService, ProjectsService, AuthenticationService, TasksService, ExperiencesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
