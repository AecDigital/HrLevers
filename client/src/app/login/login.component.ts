import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from "../../../node_modules/rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

User: any;
employee_Id: String;
  constructor(private Auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  login(username:string, password: string) {
    console.log("login....");
    this.Auth.login(username,password).subscribe( user => {
      console.log(user);
      this.User = user;
      this.employee_Id = this.User.employee_Id;
      if (this.User.isadmin) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate([`member/${this.employee_Id}`]);
      }
      
      
    });
  }
}
