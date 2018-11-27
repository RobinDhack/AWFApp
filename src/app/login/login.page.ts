import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    mail:'',
    password:''
  }

  displayName: any;
  familyName:any;
  userId:any;
  email:any;
  imageUrl:any;
  loggedIn = false;

  constructor(public router: Router, private googlePlus: GooglePlus) { }

  ngOnInit() {
  }

  logForm(){

  }

  allerVers(lien){
    this.router.navigateByUrl(lien)
  }

  // loginGoogle(){
  //   this.googlePlus.login({})
  //   .then(res => {
  //     console.log(res);
  //     this.displayName = res.displayName;
  //     this.email = res.email;
  //     this.familyName = res.familyName;
  //     this.imageUrl = res.imageUrl;
  //     this.userId = res.userId;
  //     this.loggedIn = true;
  //   })
  //   .catch(err => console.error(err));
  // }
  // logout(){
  //   this.googlePlus.logout().then(res => {
  //     this.displayName = '';
  //     this.email = '';
  //     this.familyName = '';
  //     this.imageUrl = ''; 
  //     this.userId = '';
  //     this.loggedIn = false;
  //   }).catch(err => console.error(err));
  // }
}
