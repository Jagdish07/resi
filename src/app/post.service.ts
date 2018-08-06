import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

/*import { Post } from './post';*/

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  getAllPosts(){
    return this.http.get('http://localhost/angular-api/index.php/webservice/getAllPosts/')
      .map((response: Response) => response.json());

  }

}
