import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})

export class HeaderComponent {
  title = 'Header';
  currentUser: any = {};
  constructor(

    private authenticationService: AuthenticationService,
    private router: Router ,
    private userService: UserService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // console.log(this.currentUser.data[0].email);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate ( [ '/login' ] );
  }
  checkuser(){

   return this.authenticationService.checkuser();

  }

}
