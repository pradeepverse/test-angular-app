import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  pageNo;
  sortType;

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      data => {
        this.pageNo = data.get('pageNo');
        this.sortType = data.get('sort');
      }
    )
  }

  followers = [
    {
      name: 'Kumar',
      since: '12 Aug 2018'
    },
    {
      name: 'Kiran',
      since: '12 Aug 2018'
    },
    {
      name: 'Aravind',
      since: '12 Aug 2018'
    },
    {
      name: 'Rajesh',
      since: '12 Aug 2018'
    }
  ]

}
