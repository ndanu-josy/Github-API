import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profiles } from '../classes/profiles';
import { Repos } from '../classes/repos';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  profiles!: Profiles;
  users!: Repos;

  constructor(private http: HttpClient) {
    this.profiles = new Profiles("", "","",0,0,0,"","","");
  }
  SearchUser(user: any) {
    interface ApiResponse {
      username: string;
      login: string;
      avatar_url: string;
      followers: number;
      followig: number;
      public_repos: number;
      bio: string
      location: string;        
      created_at: any;
    }

    let searchEndpoint =
    environment.api_url + user + '?access_token=' + environment.api_key;
    let promise = new Promise<void>((resolve, reject) => {
  
      this.http
        .get<ApiResponse>(searchEndpoint)
        .toPromise()
        .then(
          (res) => {
            this.profiles = res;;
            console.log(res);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}
