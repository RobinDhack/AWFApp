import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.page.html',
  styleUrls: ['./festival.page.scss'],
})
export class FestivalPage implements OnInit {

  constructor(public router: Router) { }

  goto(lien){
    this.router.navigateByUrl(lien);
  }
  ngOnInit() {
  }

}
