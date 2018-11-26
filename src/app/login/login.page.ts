import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(public router: Router) { }

  ngOnInit() {
  }

  logForm(){

  }

  allerVers(lien){
    this.router.navigateByUrl(lien)
  }
}
