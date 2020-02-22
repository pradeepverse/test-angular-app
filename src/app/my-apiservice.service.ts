import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyAPIserviceService {

  API_URL = "http://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getRecordsFromDB(): any{
    return this.http.get(this.API_URL);
  }

  postToDB(data){
    return this.http.post(this.API_URL, {
      "id": 1453,
      "title": data,
      "body": "some random text"
    })
  }

  updateRecord(post){
    return this.http.patch(this.API_URL+`/${post.id}`, {
      body: 'Edited post body'
    })
  }

  deleteRecord(post){
    return this.http.delete(this.API_URL+`/${post.id}`);
  }

}

