import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {

  constructor(private serverService:ServerService) { }

   cours = []

   ngOnInit() {
    this.serverService.getCourses()
      .subscribe(
        gd =>  {this.cours=gd.document;
         
        },
        
        (error) => console.log(error)
        
      );
  
  }

}
