import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllthreadsService } from '../../services/allthreads.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';
import { ExperiencesService } from 'services/experiences.service';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
experiences: Observable<Array<object>>;



  constructor(public experience: ExperiencesService, private route: ActivatedRoute, private Auth: AuthenticationService) { }

  ngOnInit() {
    this.experience.getExperiences().subscribe((experiences) => {
    this.experiences = experiences;
    console.log(experiences);
    });
  }
}

