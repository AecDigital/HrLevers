import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllthreadsService } from '../../services/allthreads.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';
import { ExperiencesService } from 'services/experiences.service';

@Component({
  selector: 'app-projects-count',
  templateUrl: './projects-count.component.html',
  styleUrls: ['./projects-count.component.css']
})
export class ProjectsCountComponent implements OnInit {

@Input() theCount: any;

  constructor() { }

  ngOnInit() {
  }

}
