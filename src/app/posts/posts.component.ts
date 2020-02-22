import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  apiURL = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.apiURL)
    .subscribe(
      response => {
        this.posts = response;
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
  }

  post(data: HTMLInputElement){
    let post = data.value;
    data.value = '';
    this.http.post(this.apiURL, {
      title: post,
      body: post
    })
    .subscribe(
      data => {
        console.log(data);
        (<Array<any>>this.posts).splice(0,0,data);
      }
    )
  }

}
