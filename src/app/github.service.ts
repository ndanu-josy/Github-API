import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Profiles } from './classes/profiles';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  profiles: Profiles[] = [];


  constructor(private http: HttpClient) {}
  SearchUser(username: any) {
    interface ApiResponse {
      login: string;
      html_url: string;
      avatar_url: string;
      bio: any;
      name: any;
      location: any;
      followers: any;
      following: any;
      created_at: Date;
      public_repos: any;
    }
    let searchEndpoint =
      'https://api.github.com/users/' +
      username +
      '?access_token=' +
      environment.api_key;
    let promise = new Promise<void>((resolve, reject) => {
      this.profiles = [];
      this.http
        .get<ApiResponse>(searchEndpoint)
        .toPromise()
        .then(
          (results) => {
            console.log(results);
            this.profiles.push(results);
            console.log(results);
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        );
    });
    return promise;
  }

  

    
     
    
  }
