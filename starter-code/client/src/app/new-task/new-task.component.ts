import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication.service';
import { Http, Response } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task: any;
  constructor(private ntask: TasksService, private route: ActivatedRoute, private Auth: AuthenticationService) { }

  ngOnInit() {
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


