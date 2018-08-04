import { Component, OnInit } from "@angular/core";
import { AllemployeesService } from "services/allemployees.service";
import { ExperiencesService } from "services/experiences.service";
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
  defaultKeys:Array<string> = ['Q1', 'Q2', 'Q3', 'Q4']
  genderm;
  genderf;
  performance: number;

  constructor(
    private Listemployees: AllemployeesService,
    private Listexperiences: ExperiencesService,
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
    this.Listexperiences.getPerformanceAvg().subscribe(performanceavg => {
      console.log(performanceavg);
      return this.performance = performanceavg.toFixed(2);
    });
    // this.Listexperiences.getExperiences().subscribe(experiences => this.experiences = experiences);
}
}
