import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { ActivatedRoute } from "@angular/router";
import { AllthreadsService } from "../../services/allthreads.service";
import { Http, Response } from "@angular/http";
import { AuthenticationService } from "services/authentication.service";
import { AllemployeesService } from "services/allemployees.service";
import { ExperiencesService } from "services/experiences.service";
import { TasksService } from "services/tasks.service";
import "rxjs/add/operator/map";
import { SkillsService } from "services/skills.service";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberId: String;
  member: Observable<any>;
  task: any;
  editedTask: any;
  EmployeeSkills: any;
  PositionSkills: any;
  position: Observable<any>;
  topics: any;
  skillsgap: any;
  courses: any;
  baseurl: String = "https://www.youtube.com/embed/";

  constructor(
    private skill: SkillsService,
    public ntask: TasksService,
    public teamMember: AllemployeesService,
    public Experiences: ExperiencesService,
    private route: ActivatedRoute,
    private Auth: AuthenticationService
  ) {}



  ngOnInit() {
    
    this.route.params.subscribe(params => {
      (this.memberId = params["id"]),
        this.teamMember
          .getEmployee(this.memberId)
          .subscribe(res => (this.member = res));
    });
    this.route.params.subscribe(params => {
      (this.memberId = params["id"]),
        this.skill.getEmployeeSkills(this.memberId).subscribe(skills => {
          this.EmployeeSkills = skills.employeeLevel;
          this.PositionSkills = skills.positionLevel;
        });
      this.teamMember
      .getEmployeePosition(this.memberId)
      .subscribe(position => {
        this.position = position;
        console.log(this.position);
      });
      this.skill.getSkillsGap(this.memberId).subscribe(skillsgap => {
        this.skillsgap = skillsgap;
        console.log(skillsgap);
        this.skill.gettopics(this.skillsgap).subscribe(topics => {
          this.topics = topics;
          console.log(topics);
        });
        this.skill.getcourses(this.skillsgap).subscribe(courses => {
          this.courses = courses;
          console.log(courses);
        });
      });
    });
  }
}
