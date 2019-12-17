import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    if(form.invalid){
      return ;
    }
    const fName = form.value.fName;
    const lName = form.value.lName;
    const Password1 = form.value.password;
    const Password2 = form.value.confirmpassword;
    const Email = form.value.email;
    const Gender = form.value.gender;
    
   
    this.authService.createUser(fName,lName,Email,Password1,Password2,Gender)

  }

}
