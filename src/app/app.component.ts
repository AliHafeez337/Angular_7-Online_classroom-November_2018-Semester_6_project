import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService){}
  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBX_ryH1Ccm7KegyvnrgaL045xP0nEuyLs",
        authDomain: "myproject-d770a.firebaseapp.com",

      }
    )

  this.authService.autoAuthUser();
  }
  loadedFeature = 'home';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
}
