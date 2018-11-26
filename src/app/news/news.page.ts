import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { CommentsPage } from '../comments/comments.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  goTo(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
  commenterArticle(){
    
  }

}