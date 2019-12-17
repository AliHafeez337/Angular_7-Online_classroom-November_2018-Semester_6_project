import { Component, OnInit , OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit,OnDestroy {
  //this subscription are not necessary because we are not using it
  
  userIsAuthenticated = false;
  private authStatusrSubs: Subscription;
  





  constructor(public authService: AuthService, private router: Router) { 

   };

  ngOnInit() {

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusrSubs = this.authService
    .getauthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated=isAuthenticated;
    });
  }

  ngOnDestroy(){
    this.authStatusrSubs.unsubscribe();
  }








  onSignin(form: NgForm) {
    if(form.invalid){
      return ;
    }
   
    const password = form.value.password;
    const username = form.value.email;
    this.authService.login(username,password);

    
 }
 //we are not using onLog function
 onLog(){
   if(this.userIsAuthenticated)
   {
    console.log("hey i am clicked");
    console.log(this.userIsAuthenticated);
    this.router.navigate(['/'])
   }
   
   
 }
}
