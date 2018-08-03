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

  editTask(id, Name, Description, ActionPlan, Duedate, Done) {
    return this.http
      .put(`${BASEURL}/api/tasks/edit/${id}`, this.options)
      .pipe(map((res: Response) => {}));
  }
}
