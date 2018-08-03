import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;

@Injectable()
export class SkillsService {

  options: object = {withCredentials: true};

  constructor(private http: Http) {}

getSkills() {
  return this.http.get(`${BASEURL}/api/skills`).map(res => {
    const skills = res.json();
    return skills;
  });
}

}


