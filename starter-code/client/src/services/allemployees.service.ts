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
   getEmployeesCount() {
     return this.http.get(`${BASEURL}/api/employees`).map(res => {
      const employees = res.json();
      const employeesCount = employees.length;
      return employeesCount;
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
      const gender = [male, female];
      return gender;
      });
    };
   }

  //  getAvgAge(){
  //   return this.http.get(`${BASEURL}/api/experiences`).map(res => {
  //     return res.json().reduce((acc, e) => {
  //       return acc + e.Age;
  //     }, 0) / res.json().length;
  //   });
  // }

