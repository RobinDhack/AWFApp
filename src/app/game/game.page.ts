import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  users: any;
  constructor(public navCtrl: NavController, public rest: RestService) {
    this.utilisateurs();
  }

  utilisateurs(){
    this.rest.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  
  


  ngOnInit(){

  }

}
