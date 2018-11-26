import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-mobile',
  templateUrl: './inscription-mobile.page.html',
  styleUrls: ['./inscription-mobile.page.scss'],
})
export class InscriptionMobilePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  formMobile(){
    this.router.navigate(['/formulaireMobile']);
  }

}
