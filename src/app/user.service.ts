import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    //  return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    return this.http.get('http://localhost/webservice/getall.php', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    return this.http.get('http://localhost/webservice/getuser.php?id=' + id, this.jwt())
      .map((response: Response) => {
          console.log ( response.json () );
          response.json ();
        }
      );
  }

  create(user: User) {
  console.log('service');
    console.log(user);

    return this.http.post('http://localhost/teacher-111/api/register', JSON.stringify({
      user }))
      .map((response: Response) => {

          response.json();
        }
      );
  }

  update(user: User) {

    // return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    return this.http.put('http://localhost/webservice/update.php?id=' + user.id, user, this.jwt())
      .map((response: Response) => response.json());
  }

  delete(id: number) {

    //  return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    return this.http.delete('http://localhost/webservice/delete.php?id=' + id, this.jwt())
      .map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
