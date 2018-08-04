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
      return employees;
    });
  }
  getEmployee(id) {
    return this.http.get(`${BASEURL}/api/employees/${id}`).map(res => {
      console.log(res.json());
      const employee = res.json();
      return employee;
   });
  }
   getEmployeesCount() {
     return this.http.get(`${BASEURL}/api/employees`).map(res => {
      const employees = res.json();
      const employeesCount = employees.length;
      return employeesCount;
    });
   }

   getEmployeeSkills(id) {
    return this.http.get(`${BASEURL}/api/skills/${id}`).map(res => {
      const skills = res.json();
      console.log(skills);
      return skills;
    });
  }

   getEmployeesGender() {
    return this.http.get(`${BASEURL}/api/employees`).map(res => {
      const employees = res.json();
      let male = 0;
      let female = 0;
      for (let i = 0; i < employees.length; i++) {
      if (employees[i].Gender === 'F') {
        female ++;
      } else {
        male ++;
      }
    };
      const gender = {male, female};
      return gender;
      });
    };
   }


