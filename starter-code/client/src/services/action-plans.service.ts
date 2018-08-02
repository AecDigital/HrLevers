import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;

@Injectable()
export class ActionPlansService {

  options: object = {withCredentials: true};

  constructor(private http: Http) { }

  getactionPlans() {
    return this.http.get(`${BASEURL}/api/actionplans`).map(res => {
      const actionPlans = res.json();
      console.log(actionPlans);
      return actionPlans;
    });
   }
   
   newActionPlan(Name: String, Description: String): Observable<Object> {
    return this.http.post(`${BASEURL}/api/actionPlans`, {Name, Description}, this.options).pipe(map( (res: Response) => {
        let actionPlan = res.json();
        this.newActionPlan = actionPlan ;
        console.log(this.newActionPlan);
        return this.newActionPlan;
      }));
    }
    getActionPlan(id) {
      return this.http.get(`${BASEURL}/api/actionPlans/${id}`).map(res => res.json());
  }
}
