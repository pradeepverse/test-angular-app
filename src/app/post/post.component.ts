import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  postObject: Post;

  name;
  post;
  sponsored;
  likes = 0;

  liked = true;

  damStatus = 'normal';
  // warning, danger

  ngOnInit() {
    this.name = this.postObject.user;
    this.post = this.postObject.post;
    this.sponsored = this.postObject.sponsored;
  }

  incrementLike(e){
    console.log(event)
  }

  goToPost(){
    alert('Navigated to post page');
  }

}

export interface Post{
  user: string,
  post: string,
  sponsored: boolean
}
