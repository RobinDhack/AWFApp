import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-concours',
  templateUrl: './mobile-concours.page.html',
  styleUrls: ['./mobile-concours.page.scss'],
})
export class MobileConcoursPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  versRegle(){
    this.router.navigate(['/reglement']);
  }

  versInscription(){
    this.router.navigate(['/inscriptionMobile']);
  }


}
