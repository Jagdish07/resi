import {Routes , RouterModule} from '@angular/router';
import {FeatureComponent} from './feature.component';
import {BlogComponent} from './blog.component';
import {HomeComponent} from './home.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from "./login.component";
import {HeaderComponent} from "./header.component";


const appRoutes: Routes = [
                            {path: '' , redirectTo: '/home' , pathMatch: 'full'} ,
                            {path: 'home' , component: HomeComponent} ,
                            {path: 'feature' , component: FeatureComponent} ,
                            {path: 'blog' , component: BlogComponent} ,
                            {path: 'portfolio' , component: PortfolioComponent} ,
                            {path: 'contact' , component: ContactComponent} ,
                            {path: 'register' , component: RegisterComponent} ,
                            {path: 'login' , component: LoginComponent} ,
                            /*{path: 'logout' , component: HeaderComponent} ,*/
                            {path: '**' , redirectTo: ''} ];

export const routing = RouterModule.forRoot ( appRoutes );
