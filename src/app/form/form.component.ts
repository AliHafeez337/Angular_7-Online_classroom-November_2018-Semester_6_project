import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AS } from './auth-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private as:AS) { }

  ngOnInit() {
  }
    
  onSignup(form:NgForm){
    if(form.invalid){
      return;
    }

    const fname = form.value.fname
    const lname = form.value.lname
    const pass = form.value.password
    const cpass = form.value.cpassword
    const email = form.value.email
    const gender = "Male"
    console.log(fname,lname)
    this.as.createUser(fname,lname,email,pass,cpass,gender)
  }
}
