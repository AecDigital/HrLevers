import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


const BASEURL = environment.BASEURL;


@Injectable()
export class ExperiencesService {

  options: object = {withCredentials: true};

  constructor(private http: Http) {}

  getExperiences() {
    return this.http.get(`${BASEURL}/api/experiences`).map(res => {
      const experiences = res.json();
      const experiencesCount = experiences.length;
      console.log(experiencesCount);
      console.log(experiences);
      return experiences;
    });
  }
}
