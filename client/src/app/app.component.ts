import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor (public Auth: AuthenticationService, private router: Router) {};
  ngOnInit(){
}
logout() {
  this.Auth.logout().subscribe(() => this.router.navigate(['/']));
  
}
}
