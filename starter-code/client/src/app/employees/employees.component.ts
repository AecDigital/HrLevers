import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllemployeesService } from '../../services/allemployees.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employees: Observable<Array<object>>;

  constructor(public employee: AllemployeesService, private route: ActivatedRoute, private Auth: AuthenticationService) { }

  ngOnInit() {
    this.employee.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
