import { Component, OnInit } from '@angular/core';
import{CourseService} from '../course.services'
import { ServerService } from 'src/app/server.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule , Response} from '@angular/http';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {
  

  test = [
    

    
  ];
  serverss = [
    {
      name: 'Testserver',
      capacity: 10,
     
    },
    {
      name: 'Liveserver',
      capacity: 100,
      
    },
  ];
  constructor(public serverService: ServerService) { }

  ngOnInit() {
  }
  onSave(){
    this.serverService.storeServers(this.test).subscribe(
      (response) =>console.log(response),
      (error) => console.log(error)
    )
  }
 
  onView() {
    this.serverService.getServers()
      .subscribe(
        (test: any[]) =>console.log(test),
        
        (error) => console.log(error)
      );
  }
  appName = this.serverService.getName()

}
