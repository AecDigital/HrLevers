import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
const cors = require('cors');

const BASEURL = environment.BASEURL;

@Injectable()
export class SkillsService {
  options: object = { withCredentials: true };

  constructor(private http: Http) {}

  getSkills() {
    return this.http.get(`${BASEURL}/api/skills`).map(res => {
      const skills = res.json();
      return skills;
    });
  }

  getEmployeeSkills(id) {
    return this.http.get(`${BASEURL}/api/employeeskills/${id}`).map(res => {
      const skills = res.json();
      let employeeskills = skills.employeeskills.skills;
      let positionskills = skills.positionskills.skills;
      let employeeLevel = employeeskills.map(a => a.Level);
      let positionLevel = positionskills.map(a => a.RequiredLevel);
      const skillsLevel = { employeeLevel, positionLevel };
      return skillsLevel;
    });
  }

  // getSkillsGap(id) {
  //   return this.http.get(`${BASEURL}/api/employeeskills/${id}`).map(res => {
  //     const skills = res.json();
  //     const employeeskills=skills.employeeskills.skills;
  //     const positionskills=skills.positionskills.skills;
  //     const gap = [];
  //     for (let i = 0; i <= employeeskills.length; i++) {
  //       for (let j = 0; j <= positionskills.length; j++) {
  //         if ((positionskills[j].RequiredLevel - employeeskills[i].Level) > 2) {
  //           gap.push(positionskills[j]);
  //         }
  //       }
  //     }   let gaptitle = gap.map(a => a.Title);
  //         return positionskills;
  //   });
  // }

  getSkillsGap(id) {
    return this.http.get(`${BASEURL}/api/employeeskills/${id}`).map(res => {
      const skills = res.json();
      const positionskills = skills.positionskills.skills;
      const employeeskills = skills.employeeskills.skills;
      const gap = [];
      const gap2 = [];
      positionskills.forEach(e1 =>
        employeeskills.forEach(e2 => {
          if (e1.RequiredLevel - e2.Level > 2) {
            gap.push(e2);
          }
        })
      );
      for (let i = 0; i < gap.length; i++) {
        if (i % 2 === 0) {
          gap2.push(gap[i], gap[i + 1]);
        }
      }
      let gaptitle = gap2.map(a => a.Title);
      console.log(gap);
      return gaptitle;
    });
  }
  gettopics(gaptitle) {
    return this.http.post(`${BASEURL}/api/employees/user-topics/`, {gaptitle}, this.options).map(res => {
    const feeds = res.json();
    return feeds;
    });
  }
  getcourses(gaptitle) {
    return this.http.post(`${BASEURL}/api/employees/user-courses/`, {gaptitle}, this.options).map(res => {
      const courses = res.json();
      return courses;
    });
  }
}
