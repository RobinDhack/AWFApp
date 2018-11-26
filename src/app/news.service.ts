import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URl = environment.apiUrl;
const API_KEy = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get(`${API_URl}/${url}&apiKey=${API_KEy}`);
  }
}
