import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Observable<Array<object>>;
  projectId: String;

  constructor(public project: ProjectsService, private route: ActivatedRoute, private Auth: AuthenticationService) { }

  ngOnInit() {
    this.project.getProjects().subscribe((projects) => {
      this.projects = projects;
    });

    this.route.params.subscribe((params) => {
      this.projectId = params['id'],
      this.project.getProject(this.projectId).subscribe(res => this.project = res);
  });
}
}







