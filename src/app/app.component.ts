import { Post } from './post/post.component';
import { Component, AfterViewInit, OnInit, AfterViewChecked, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  dataArray = [
    'apple', 'banana', 'orange', 'papaya', 'apple', 'banana', 'orange', 'papaya', 'apple', 'banana', 'orange', 'papaya'
  ];

  title = 'Angular course';
  studentCount = 4;
  courseRating = 4.4433;
  price = 300;
  courseDate = Date.now();

  paragraph = 'This paragraph contains longer text. This paragraph contains longer text. This paragraph contains longer text. This paragraph contains longer text. This paragraph contains longer text.This paragraph contains longer text.';

  myPost = "Hi how are you?";
  mode = 'nightMode';

  ngOnInit(){
    console.log(document.getElementById('mode'));
  }

  ngAfterViewChecked(){
    console.log(document.getElementById('mode'));
  }



  showPost(){
    alert(this.myPost);
  }
















  posts: Post[] = [
    {
      user: 'Praveen',
      post: 'Hello',
      sponsored: true
    },
    {
      user: 'Ram',
      post: 'I\'m good',
      sponsored: false
    },
    {
      user: 'Kumar',
      post: 'How are you?',
      sponsored: false
    }
  ];

  newPost(e){
    console.log(e);
    alert(`New post created by ${e}`);
  }

  span = 2;
  name = 'Praveen';
  img = 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/FEB_2020/SVD/GW_HERO_SBI/GW_PANTRY_HERO_SBI_3000x1200._CB424111529_.jpg';

}
