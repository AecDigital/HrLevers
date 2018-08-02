import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllthreadsService } from '../../services/allthreads.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';
import { AllemployeesService } from 'services/allemployees.service';
import { ExperiencesService } from 'services/experiences.service';

@Component({
  selector: 'app-team-member-profile',
  templateUrl: './team-member-profile.component.html',
  styleUrls: ['./team-member-profile.component.css']
})
export class TeamMemberProfileComponent implements OnInit {
  memberId: String;
  member: Observable<any>;

  constructor(public teamMember: AllemployeesService, public Experiences: ExperiencesService, private route: ActivatedRoute, private Auth: AuthenticationService) {}


  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.memberId = params['id'],
      this.teamMember.getEmployee(this.memberId).subscribe(res => this.member = res);
  });
  
}
}
