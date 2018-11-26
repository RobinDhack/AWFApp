import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article;
  lastupdate = new Date();
  apiUrl = 'http://localhost/angular/insert.php';
  
    data=
      {
      name:'',
      comments:''
      }
  
  constructor(private newsService: NewsService,
              private http: HttpClient) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
  
  logForm(){
    let formdata = new FormData();
    formdata.append('name', this.data.name);
    formdata.append('comments', this.data.comments);
    this.http.post(this.apiUrl, formdata)
    .subscribe(data=>{
      console.log(data);
    });
  }
  }