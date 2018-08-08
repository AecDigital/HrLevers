import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "../../node_modules/rxjs";
import { environment } from "../environments/environment";
import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
import * as _ from 'lodash';

const BASEURL = environment.BASEURL;

@Injectable()
export class ExperiencesService {
  options: object = { withCredentials: true };

  constructor(private http: Http) {}

  getExperiences() {
    return this.http.get(`${BASEURL}/api/experiences`).map(res => {
      const experiences = res.json();
      const experiencesCount = experiences.length;
      return experiences;
    });
  }
   
  getExperiencesProject() {
    return this.http.get(`${BASEURL}/api/experiences`).map(res => {
      const experiences = res.json();
      const experiencesProjects = experiences.reduce((acc, e) => {
        return acc + e.number_project;
      }, 0);
      return experiencesProjects;
    });
  }
  getAvgMonthlyHours(): any {
    return this.http.get(`${BASEURL}/api/experiences`).map(res => {
      return (
        res.json().reduce((acc, e) => {
          return acc + e.average_montly_hours;
        }, 0) / res.json().length
      );
    });
  }
  getEngagement() {
    return this.http.get(`${BASEURL}/api/experiences`).map(res => {
      const experiences = res.json();
      const result = [];
      const avg = experiences.map(e => {
        return _.pick(e, [
          "EMP_Engagement_1",
          "EMP_Engagement_2",
          "EMP_Engagement_3",
          "EMP_Engagement_4"
        ]);
      });
      const avg1 = this.meanByKey(avg, 'EMP_Engagement_1');
      const avg2 = this.meanByKey(avg, 'EMP_Engagement_2');
      const avg3 = this.meanByKey(avg, 'EMP_Engagement_3');
      const avg4 = this.meanByKey(avg, 'EMP_Engagement_4');
      const valores = [avg1, avg2, avg3, avg4];
      return valores;
    });
  }

  meanByKey(arr, key) {
    return arr.map(e => e[key]).reduce((acc, e, i, a) => acc + e / a.length, 0);
  }

getCompetitive() {
  return this.http.get(`${BASEURL}/api/experiences`).map(res => {
    const experiences = res.json();
    const result = [];
    const comp = experiences.map(e => {
      return _.pick(e, [
        "Emp_Competitive_1",
        "Emp_Competitive_2",
        "Emp_Competitive_3",
        "Emp_Competitive_4"
      ]);
    });
    const comp1 = this.meanByKey(comp, 'Emp_Competitive_1');
    const comp2 = this.meanByKey(comp, 'Emp_Competitive_2');
    const comp3 = this.meanByKey(comp, 'Emp_Competitive_3');
    const comp4 = this.meanByKey(comp, 'Emp_Competitive_4');
    const compet = [comp1, comp2, comp3, comp4];
    return compet;
  });
}
getCollaborative() {
  return this.http.get(`${BASEURL}/api/experiences`).map(res => {
    const experiences = res.json();
    // console.log(experiences);
    const result = [];
    const coll = experiences.map(e => {
      console.log(_.pick(e, ["Emp_Collaborative_1"]));
      return _.pick(e, [
        "Emp_Collaborative_1",
        "Emp_Collaborative_2",
        "Emp_Collaborative_3",
        "Emp_Collaborative_4"
      ]);
    });
    const coll1 = this.meanByKey(coll, 'Emp_Collaborative_1');
    const coll2 = this.meanByKey(coll, 'Emp_Collaborative_2');
    const coll3 = this.meanByKey(coll, 'Emp_Collaborative_3');
    const coll4 = this.meanByKey(coll, 'Emp_Collaborative_4');
    const collab = [coll1, coll2, coll3, coll4];
    return collab;
  });
}
getPerformanceAvg(): any {
  return this.http.get(`${BASEURL}/api/experiences`).map(res => {
    return (
      res.json().reduce((acc, e) => {
        return acc + parseFloat(e.last_evaluation);
      }, 0) / res.json().length
    );
  });
}
getTalentAvg(): any {
  return this.http.get(`${BASEURL}/api/experiences`).map(res => {
    return (
      res.json().reduce((acc, e) => {
        return acc + e.Talent_Level;
      }, 0) / res.json().length
    );
  });
}
getTimeAvg(): any {
  return this.http.get(`${BASEURL}/api/experiences`).map(res => {
    return (
      res.json().reduce((acc, e) => {
        return acc + e.time_spend_company;
      }, 0) / res.json().length
    );
  });
}
}


