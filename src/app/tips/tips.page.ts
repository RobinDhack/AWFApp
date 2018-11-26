import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  navigateTo(lien){
    this.router.navigateByUrl(lien);
  }

}
