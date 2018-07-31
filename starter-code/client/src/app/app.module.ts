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
    ExperiencesComponent
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
