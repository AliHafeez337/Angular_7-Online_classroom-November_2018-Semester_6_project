import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { ServerService } from 'src/app/server.service';
import { Subscription } from 'rxjs';
import{CourseService} from '../course.services'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CourseService]
})
export class CardComponent implements OnInit {

  paramsSubscription : Subscription;



  

  courses=[] ;
  five=[1,2,3,4,5];
  
  
constructor(private  serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getCourses()
      .subscribe(
        gd =>  {this.courses=gd.document;
         
        },
        
        (error) => console.log(error)
        
      );
  
  }
 

  

}
