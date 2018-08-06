import {Component , Input , OnInit} from '@angular/core';
import {FormGroup , FormBuilder , Validators , FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {UserService} from './user.service';
import {User} from './user';
import {AuthenticationService} from './authentication.service';
import {AlertService} from "./_services/alert.service";

@Component ( {
  selector: 'app-root' ,
  templateUrl: './login.component.html' ,
} )
export class LoginComponent implements OnInit {

  private currentTimeout: number;
  form: FormGroup;
  model: any = {};
  user: User = new User ();

  constructor (private formBuilder: FormBuilder ,
               private router: Router ,
               private userService: UserService,
               private authenticationService: AuthenticationService,
               private alertService: AlertService
              ) {
  }

  ngOnInit () {
    this.form = this.formBuilder.group ( {
      email: [ null , [ Validators.required , Validators.email ] ] ,
      password: [ null , Validators.required ] ,

    } );
  }

  isFieldValid (field: string) {
    return !this.form.get ( field ).valid && this.form.get ( field ).touched;
  }

  displayFieldCss (field: string) {
    return {
      'has-error': this.isFieldValid ( field ) ,
      'has-feedback': this.isFieldValid ( field )
    };
  }

  onSubmit () {
    if (this.form.valid) {

      this.authenticationService.login(this.form.value.email, this.form.value.password)
        .subscribe(
          data => {
            if(data.status === 'true'){
              this.router.navigate ( [ '/home' ] );
            } else{
            this.alertService.error('login failled', true);
          
     
            }

          },
          error => {
            // this.alertService.	(error);
            
			this.alertService.error('login failled', true);
          });

    } else {
      this.validateAllFormFields ( this.form );
    }
  }

  validateAllFormFields (formGroup: FormGroup) {
    Object.keys ( formGroup.controls ).forEach ( field => {
      // console.log(field);
      const control = formGroup.get ( field );
      if (control instanceof FormControl) {
        control.markAsTouched ( {onlySelf: true} );
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields ( control );
      }
    } );
  }

  reset () {
    this.form.reset ();
  }


}
