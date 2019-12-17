import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {CourseData, CourseData1} from "./student.model"

import {Subject} from "rxjs"
import { Router } from '@angular/router';

@Injectable({providedIn: "root"})

export class StudentService{

     

    constructor(private http:HttpClient , private router : Router){}
   
    
    registerCourse(
        courses: string,
        instructors: string,
        
        )
         {
             const authData: CourseData = {courses:courses, instructors:instructors};
                console.log(authData);
                this.http.put("http://localhost:3000/student/rc",authData,{responseType: 'text'}).subscribe(
                    response => {
                        console.log(response);
                    }
                )
                }

                dropCourse(
                    courses: string,
                    
                    
                    )
                     {
                         const authData: CourseData1 = {courses:courses};
                            console.log(authData);
                            this.http.put("http://localhost:3000/student/rcd",authData,{responseType: 'text'}).subscribe(
                                response => {
                                    console.log(response);
                                }
                            )
                            return true;
                            }
            }