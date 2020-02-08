import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  liked;

  showDescription = false;

  ngOnInit() {
    this.liked = false;
  }

  myday = "";

  days = {
    sunday:'holiday',
    monday: 'prayer',
    tuesday: 'skit',
    wednesday: 'solo singing'
  }

  like(){
    console.log(this.liked);
    this.liked = !this.liked;
  }

}
