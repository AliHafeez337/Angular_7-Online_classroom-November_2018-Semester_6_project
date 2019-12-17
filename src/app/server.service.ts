import {Injectable, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';


@Injectable()
export class ServerService implements OnInit {
constructor(private http: Http){
}


ngOnInit(){
  
}
storeServers(servers: any[]) {
    return this.http.put('https://myproject-d770a.firebaseio.com/test.json',servers)
}

getServers() {
    return this.http.get('https://myproject-d770a.firebaseio.com/test.json')
      .map(
        (response: Response) => {
          const data = response.json();
          
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getName() {
    return this.http.get('https://myproject-d770a.firebaseio.com/async.json')
      .map(
        (response: Response) => {
          const data = response.json();
          
          return data;
        }
      )
    
  }


  getCourses() {
    return this.http.get('http://localhost:3000/class/')
    .pipe(map(
      (response: Response) => response.json()
    ))
      
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getScourses() {
    return this.http.get('http://localhost:3000/student/')
    .pipe(map(
      (response: Response) => response.json()
    ))
      
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }






  
}