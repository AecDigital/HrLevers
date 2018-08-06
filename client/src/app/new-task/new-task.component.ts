import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication.service';
import { Http, Response } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs';
import { AllemployeesService } from '../../services/allemployees.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task: any;
  memberId: String;
  member: Observable<any>;
  constructor(private teamMember: AllemployeesService, private ntask: TasksService, private route: ActivatedRoute, private Auth: AuthenticationService) { }

  ngOnInit() {
  }
  
getEmployee() {
  this.route.params.subscribe(params => {
    (this.memberId = params["id"]),
      this.teamMember
        .getEmployee(this.memberId)
        .subscribe(res => (this.member = res));
  });
}

  newTask(Name, Description, Duedate) {
    this.route.params
    .subscribe((params) => {
      this.ntask.newTask(Name, Description, params.id, Duedate).subscribe((data) => {
      this.task = data;
      console.log(this.task);
    });
  });
}
}




