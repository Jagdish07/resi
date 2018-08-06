import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

/*import { Post } from './post';*/

@Injectable()
export class PortfolioService {
  constructor(private http: Http) { }

  getImages(){
    return this.http.get('http://localhost/angular-api/index.php/webservice/getImages/').
    map((response: Response) => response.json());

  }







}
