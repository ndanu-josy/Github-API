import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repos } from './classes/repos';
import { environment } from './../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  // repos: Repos[] = [];

  // constructor(private http: HttpClient) {}

  // displayRepos(username: any ='josy-ndanu') {
  //   interface apiResponse {
  //     name: string;
  //     description: string;
  //     html_url: string;
  //     language: string;
  //   }
 

  //   let reposUrl =
  //     'https://api.github.com/users/' +
  //     username +'/repos'
  //     '?access_token=' +
  //     environment.api_key;

  //   let promise = new Promise<void>((resolve, reject) => {
  //     this.http
  //       .get<apiResponse>(reposUrl)
  //       .toPromise()
  //       .then(
  //         (response) => {
  //           this.repos.push(response);
            
  //           console
  //           resolve();
  //         },
  //         (error) => {
  //           reject();
  //         }
  //       );
  //   });
  //   return promise;
  // }

  Url = 'https://api.github.com/users/';
  // token = '?access_token=' + environment.api_key;

  constructor(public http: HttpClient) {}
  getRepoInfo(username: string): Observable<any> {
    return  this.http.get(this.Url + username + '/repos');
    // return this.http.get(this._URL + username + '/repos' + this.token);
  }
}

