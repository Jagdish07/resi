import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FeatureComponent} from './feature.component';
import {BlogComponent} from './blog.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {routing} from './app-routing';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';
import {RegisterComponent} from './register.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {FieldErrorDisplayComponent} from './field.error.display.component';

import {UserService} from './user.service';
import {AuthenticationService} from './authentication.service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {AlertService} from "./_services/alert.service";
import {AlertComponent} from "./_directives/alert.component";
import {LoginComponent} from "./login.component";
import {PostService} from "./post.service";
import {PortfolioService} from "./portfolio.service";

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    RegisterComponent,
    FieldErrorDisplayComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    AlertService,
    AuthenticationService,
    PostService,
    PortfolioService
  ],
  bootstrap: [HeaderComponent, AppComponent, FooterComponent]
})
export class AppModule { }
