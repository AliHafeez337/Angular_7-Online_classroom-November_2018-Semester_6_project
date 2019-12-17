import {OnInit,Injectable} from '@angular/core'
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService implements OnInit {
ngOnInit(){

}
constructor(private http: Http){}
getCourses(){
    return this.http.get("'http://localhost:3000/class/'").pipe(
        map((response: Response) =>response.json() )
    ).catch(
       (error: Response) =>{
        return Observable.throw ("wrong");
       }
    ) 
        
    
}

}