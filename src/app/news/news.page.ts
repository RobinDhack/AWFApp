import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  // actualites: any;
  lastUpdate = new Date()
  constructor(private router: Router,) { 
    // this.actus();
  }

  

  ngOnInit() {
    // this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
    //   console.log(data);
    //   this.data = data;
    // });
  }
  goto(lien){
    this.router.navigateByUrl(lien);
  }
  // goTo(article){
  //   this.newsService.currentArticle = article;
  //   this.router.navigate(['/news-single']);
  // }

  // actus(){
  //   this.rest.getActu()
  //   .then(data => {
  //     this.actualites = data;
  //     console.log(this.actualites);
  //   });
  // }


}
