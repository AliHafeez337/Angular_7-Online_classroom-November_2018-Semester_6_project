import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CardComponent } from './course/card/card.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
//import { ParametersComponent } from './parameters/parameters.component';
import { ServerService } from './server.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
 import { HttpModule  } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { AuthInterceptor } from "./auth/auth-interceptor";
//import { StudentComponent } from './student/student.component';
import { ScourseComponent } from './studentdir/scourse/scourse.component';
import { StudentComponent } from './studentdir/student/student.component';
import { AuthGuard } from './auth/auth.guard';
import { DispComponent } from './disp/disp.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
{path: '' , component: CoursesComponent},
{path: 'aboutus' , component: AboutusComponent},
//{path: 'parameters/:id/:name' , component: ParametersComponent},
{path: 'signup' , component: SignupComponent},
{path: 'signin' , component: SigninComponent},
{path: 'student/register' , component: ScourseComponent,canActivate: [AuthGuard]},
{path: 'student' , component: StudentComponent,canActivate: [AuthGuard]},
{path: 'courses' , component:DispComponent},
{path: 'post' , component:FormComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    //ParametersComponent,
    SignupComponent,
    SigninComponent,
   // StudentComponent,
    ScourseComponent,
   StudentComponent,
   DispComponent,
   FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes),
    HttpModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },ServerService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
