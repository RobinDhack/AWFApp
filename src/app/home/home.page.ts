import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public router:Router){}

  versActu(){
    this.router.navigate(['/news']);
  }
  versFesti(){
    this.router.navigate(['/festival']);
  }
  versSpeaker(){
    this.router.navigate(['/speakers']);
  }

  allerVersForm(){
    this.router.navigate(['/mobileConcours'])
  }

  loginPage(lien){
    this.router.navigateByUrl(lien)
  }
}
