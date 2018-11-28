import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  // apiUrl = 'http://nan-oracle.yn.fr/node:3000';
  constructor(private http: HttpClient) { 
    console.log("le service a fonctionné");
  }
  // getUsers(){
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/users').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

  // getActu(){
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/actu').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }

}
