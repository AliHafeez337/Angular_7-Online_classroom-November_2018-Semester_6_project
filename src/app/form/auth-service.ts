import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {AuthData} from "./auth-model"

import {Subject} from "rxjs"
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({providedIn: "root"})
export class AS{
    
    constructor(private http:HttpClient , private router : Router){}

    createUser(
        fName: string,
        lName: string,
        Registration: string,
        Password1: string,
        Password2: string,
        Gender: string)
         {
             const authData: AuthData = {fName: fName, lName: lName,Registration: Registration,
                Password1: Password1, Password2: Password2,Gender: Gender};
                console.log(authData);
                this.http.post("http://localhost:3000/student/register",authData,{responseType: 'text'}).subscribe(
                    response => {
                        console.log(response);
                    }
                )

    }
}