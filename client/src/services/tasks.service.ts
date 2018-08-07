import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import "rxjs/add/operator/map";
import { map } from "rxjs/operators";

const BASEURL = environment.BASEURL;

@Injectable()
export class TasksService {
  options: object = { withCredentials: true };
editedtask: any;
  constructor(private http: Http) {}

  newTask(
    Name: String,
    Description: String,
    Duedate: Date,
    ActionPlan: String
  ): Observable<Object> {
    return this.http
      .post(
        `${BASEURL}/api/tasks`,
        { Name, Description, Duedate, ActionPlan },
        this.options
      )
      .pipe(
        map((res: Response) => {
          let task = res.json();
          this.newTask = task;
          console.log(this.newTask);
          return this.newTask;
        })
      );
  }

  removeTask(id) {
    return this.http
      .delete(`${BASEURL}/api/tasks/delete/${id}`, this.options)
      .pipe(map((res: Response) => {}));
  }

  editTask(id, Name, Description, Duedate, Status) {
    return this.http
      .put(`${BASEURL}/api/tasks/edit/${id}`, { id, Name, Description, Duedate, Status }, this.options)
      .pipe(map((res: Response) => {
        let editedtask = res.json();
        console.log(editedtask);
        return this.editedtask;
      }));
  }
}
