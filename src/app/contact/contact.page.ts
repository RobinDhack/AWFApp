import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(public router: Router){

  }
  goto(lien){
    this.router.navigateByUrl(lien);
  }
}
