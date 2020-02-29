import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamental',
  templateUrl: './fundamental.component.html',
  styleUrls: ['./fundamental.component.css']
})
export class FundamentalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export function compute(number){
  if(number < 0){
    return 0;
  } else {
    return number + 1;
  }
}
