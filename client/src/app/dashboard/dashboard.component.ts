import { Component, OnInit } from "@angular/core";
import { AllemployeesService } from "services/allemployees.service";
import { ExperiencesService } from "services/experiences.service";
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from '../../../node_modules/rxjs';
import { count } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  employees: any;
  experiences: any;
  count;
  projects: number;
  avg: number;
  eng;
  age;
  comp;
  coll = [];
  defaultKeys: Array<string> = ['Q1', 'Q2', 'Q3', 'Q4']
  keys2: Array<string> = ['18 - 25', '25 - 40', '40 - 60', '60+']
  genderm;
  genderf;
  performance: number;
  talent: number;
  time: number;
  aged: any;
  avgage: any;
  User: any;
  employee_Id: String;

  constructor(
    private Listemployees: AllemployeesService,
    private Listexperiences: ExperiencesService,
    private Auth: AuthenticationService,
  ) {}

  ngOnInit() {
    // this.Listemployees.getAvgAge().subscribe(age => (this.age = age));
    this.Listemployees.getEmployeesCount().subscribe(count => (this.count = count));
    this.Listexperiences.getExperiencesProject().subscribe(projects => (this.projects = projects));
    this.Listexperiences.getAvgMonthlyHours().subscribe(avg => {
      return this.avg = avg.toFixed(2);
    });
    this.Listexperiences.getEngagement().subscribe(eng => {
      this.eng = eng;
    });
    this.Listexperiences.getCompetitive().subscribe(comp => (this.comp = comp));
    this.Listexperiences.getCollaborative().subscribe(coll => {
      this.coll = coll;
    });
    this.Listemployees.getEmployeesGender().subscribe(gender => {
      this.genderm = gender.male;
    this.genderf = gender.female;
    });
    this.Listemployees.getAvgAge().subscribe(avgage => {
      this.avgage = parseInt(avgage);
      console.log(this.avgage);
    });
    this.Listexperiences.getPerformanceAvg().subscribe(performanceavg => {
      console.log(performanceavg);
      return this.performance = performanceavg.toFixed(2);
    });
    this.Listexperiences.getTalentAvg().subscribe(talentavg => {
      console.log(talentavg);
      return this.talent = talentavg.toFixed(2);
    });
    this.Listexperiences.getTimeAvg().subscribe(timeavg => {
      console.log(timeavg);
      return this.time = timeavg.toFixed(2);
    });
    this.Listemployees.getAgedist().subscribe(agedist => {
      console.log(agedist);
      return this.aged = agedist;
    });
}
//   login(username: string, password: string) {
//   this.Auth.login(username, password).subscribe( user => {
//     console.log(user);
//     this.User = user;
//     return this.User;
//   });
// }
}
