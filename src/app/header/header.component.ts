import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public auth: AuthServiceService) { }

  ngOnInit() {
    
  }

  signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }

}
