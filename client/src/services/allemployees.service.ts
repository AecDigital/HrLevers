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

  getEmployeePosition(id) {
    return this.http.get(`${BASEURL}/api/position/${id}`).map(res => {
      const position = res.json();
      return position;
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
   

   getAgedist(): any {
    return this.http.get(`${BASEURL}/api/employees`).map(res => {
      const employees = res.json();
      let age1 = 0;
      let age2 = 0;
      let age3 = 0;
      let age4 = 0;
      for (let i = 0; i < employees.length; i++){
        if (employees[i].Age >= 18 && employees[i].Age < 25) {
          age1 ++;
        } else if (employees[i].Age > 25 && employees[i].Age <= 40){
          age2 ++;
        } else if (employees[i].Age > 40 && employees[i].Age <= 60){
          age3 ++;
        } else {
          age4 ++;
        }
      };
      const Agedist = [ age1, age2, age3, age4 ];
      console.log(Agedist);
      return Agedist;
});
  }
  getTasksProgress(id): any {
    return this.http.get(`${BASEURL}/api/employees/${id}`).map(res => {
      const employee = res.json();
      let tasksDone = 0;
      console.log(employee.tasks)
      for (let i = 0; i < employee.tasks.length; i++){
        if (employee.tasks[i].Status === "Done") {
          tasksDone ++;
        }
      }
      let tasksProgress = tasksDone * 100 / employee.tasks.length;
      console.log(tasksProgress);
        return tasksProgress;
    });
    };
}

