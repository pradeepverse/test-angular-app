import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  userName: string;

  ngOnInit() {
    
    this.route.paramMap.subscribe(
      data => {
        this.userName = data.get('name');
      }
    )
  }

}
