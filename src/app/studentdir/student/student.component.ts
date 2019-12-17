import { Component, OnInit,OnChanges,IterableDiffers, SimpleChanges,ChangeDetectionStrategy, Input } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { AuthService } from 'src/app/auth/auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements  OnInit, OnChanges {

  @Input() scourses:[] ;
  
  userId:string;
  userIsAuthenticated = false;
  //private authStatusSub: Subscription;
  
  constructor(private  serverService: ServerService , private authService:AuthService, private studentService: StudentService,private _iterableDiffers: IterableDiffers) { 

   
  }
  ngOnChanges(changes: SimpleChanges){
      console.log("hey changes");
      console.log(changes);

  }
    ngOnInit() {
      this.userId = this.authService.getUserId();
      console.log(this.userId)
      this.serverService.getScourses()
        .subscribe(
          sc =>  {this.scourses=sc.document;
           
          },
          
          (error) => console.log(error)
          
        );

        
    
    }
  


     onTest(){
      
       this.userId = this.authService.getUserId();
        console.log(this.userId)
        this.serverService.getScourses()
          .subscribe(
            sc =>  {this.scourses=sc.document;
             
            },
            
            (error) => console.log(error)
            
          );
       
     }
     
    onDrop(courses) {
   
      console.log (courses);
       
      
      var dc= this.studentService.dropCourse(courses);
      setTimeout(() =>{
        if(dc){
          this.onTest();
        }

      },50)


      
      
      }

     
    
  
  }
  