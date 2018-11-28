import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article;
  lastupdate = new Date();
  actualites: any;
  constructor(private newsService: NewsService,
              private http: HttpClient,
              public rest: RestService) { 
                this.actus();
              }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
  actus(){
    this.rest.getActu()
    .then(data => {
      this.actualites = data;
      console.log(this.actualites);
    });
  }
  
  }