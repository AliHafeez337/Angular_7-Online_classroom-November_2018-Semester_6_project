import { Component, EventEmitter, Output,OnInit, OnDestroy} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
@Output() featureSelected = new EventEmitter<string>();

userIsAuthenticated = false;
private authListenerSubs: Subscription;
  
onSelect(feature: string){

   this.featureSelected.emit(feature);
}
constructor(private authService: AuthService){
  this.userIsAuthenticated = this.authService.getIsAuth();
  this.authListenerSubs = this.authService
  .getauthStatusListener()
  .subscribe(isAuthenticated => {
    this.userIsAuthenticated=isAuthenticated;
  })

}
ngOnInit(){

}
onLogout(){
  this.authService.logout();
  console.log("click worked");
}
ngOnDestroy(){
  this.authListenerSubs.unsubscribe();
}

}
