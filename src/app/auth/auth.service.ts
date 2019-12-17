import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {AuthData} from "./auth.model"
import {AuthDataa} from "./auth.model"
import {Subject} from "rxjs"
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({providedIn: "root"})
export class AuthService{
      private token : string;
      private authStatusListener = new Subject<boolean>();
      private isAuthenticated = false;
      private userId : string;
      private tokenTimer : any;
    constructor(private http:HttpClient , private router : Router){}
    getToken(){
         return this.token;
     }
     getIsAuth(){
         return this.isAuthenticated;
     }

     getauthStatusListener(){
         return this.authStatusListener.asObservable();
     }
     getUserId(){
         return this.userId;
     }
    
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
    login(
        username: string,
        password: string
    ){
        const authData: AuthDataa = {username: username,
        password: password};
        console.log(authData);
        this.http.post<{token: string, expiresIn: number, userId: string}>("http://localhost:3000/student/login",authData,).subscribe(
            response => {
                const token = response.token;
                this.token = token;
                if(token)
                {
                    const expiresInDuration = response.expiresIn;
                    console.log(expiresInDuration)
                    this.setAuthTimer(expiresInDuration)
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    this.userId = response.userId
                    console.log(this.userId);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    console.log(expirationDate);
                    this.saveAuthData(token, expirationDate,this.userId);
                    this.router.navigate(['/'])
                }
                

            }
        )

}


autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }



logout(){
    this.token=null;
    this.authStatusListener.next(false);
    this.isAuthenticated = false;
    this.userId = null;
    this.router.navigate(['/']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
}

private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }








private saveAuthData(token: string, expirationDate: Date, userId:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId",userId)
  }
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId")
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId")
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId:userId
    }
  }
}





