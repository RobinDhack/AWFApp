import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;
  constructor(private http: HttpClient) { }

}
