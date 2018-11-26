import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-formulaire-mobile',
  templateUrl: './formulaire-mobile.page.html',
  styleUrls: ['./formulaire-mobile.page.scss'],
})
export class FormulaireMobilePage implements OnInit {

  user = {
    nom:"",
    prenoms:"",
    age:"",
    sexe:"",
    email:"",
    telephone:"",
    video:"",
    urlFacebook:"",
  }
  constructor() { }

  ngOnInit() {
  }

  logForm(){
    console.log(this.user);
  }

}
