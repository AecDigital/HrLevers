import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;

@Injectable()
export class ProjectsService {

  options: object = {withCredentials: true};

  constructor(private http: Http) {}

  getProjects() {
    return this.http.get(`${BASEURL}/api/projects`).map(res => {
      const projects = res.json();
      console.log(projects);
      return projects;
    });
   }
   
   newProject(title: String, client: String): Observable<Object> {
    return this.http.post(`${BASEURL}/api/threads`, {title, client}, this.options).pipe(map( (res: Response) => {
        let project = res.json();
        this.newProject = project;
        console.log(this.newProject);
        return this.newProject;
      }));
    }
    getProject(id) {
      return this.http.get(`${BASEURL}/api/projects/${id}`).map(res => res.json());
  }
}
