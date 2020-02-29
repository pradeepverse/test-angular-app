import { MyAPIserviceService } from './../my-apiservice.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {


  posts;

  constructor(private myAPIService: MyAPIserviceService, private _snackBar: MatSnackBar, private router: Router) {
    
   }

  ngOnInit() {
    this.myAPIService.getRecordsFromDB().subscribe(
      data => {
        console.log("Inside subscribe");
        this.posts = data;
        this._snackBar.open("Data fetched successfully!!!", "", {
          duration: 2000,
        });
      }, (error: Response) => {

        if(error.status == 404){
          this._snackBar.open("Sorry not found!!!", "", {
            duration: 2000,
          });
        } else if(error.status == 403){
          this._snackBar.open("Sorry you don't have access!!!", "", {
            duration: 2000,
          });
        }
        
      }
    )
    console.log("Inside ngOnInit...")
  }

  post(postInputBox: HTMLInputElement){
    let dataTobePosted = postInputBox.value;
    postInputBox.value = '';
    this.myAPIService.postToDB(dataTobePosted).subscribe(
      (data) => {
        let response = data;
        this.posts.splice(0,0,response);
      }
    )
  }

  put(post){
    this.myAPIService.updateRecord(post).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  delete(post){
    this.myAPIService.deleteRecord(post)
    .subscribe(
      data => {
        console.log(post.id);
        this.posts.splice(+(post.id-1), 1);
        console.log(this.posts);
      }
    )
  }

  signOut(){
    this.router.navigate(['/']);
  }

}
