import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;


@Injectable()
export class AllemployeesService {

  options: object = {withCredentials: true};

  constructor(private http: Http) {}

  getEmployees() {
    return this.http.get(`${BASEURL}/api/employees`).map(res => {
      const employees = res.json();
      console.log(employees);
      return employees;
    });
   }
}
