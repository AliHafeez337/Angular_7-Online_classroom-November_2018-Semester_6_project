import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-scourse',
  templateUrl: './scourse.component.html',
  styleUrls: ['./scourse.component.scss']
})
export class ScourseComponent implements OnInit {

  rcourses=[] ;
  disable = "dis"
  
  
constructor(private  serverService: ServerService, private studentService: StudentService) { }
 
  ngOnInit() {
    this.serverService.getCourses()
      .subscribe(
        rc =>  {this.rcourses=rc.document;
         
        },
        
        (error) => console.log(error)
        
      );
  
  }
  onCourseR(courses,instructors) {
   
   console.log (courses,instructors);
    
   
    this.studentService.registerCourse(courses,instructors);

  }
  

  

}





    







  

  
