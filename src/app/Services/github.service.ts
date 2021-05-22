import { Injectable } from '@angular/core';
// import {Repos} from '../classes/repos'
// import {Profiles} from '../classes/profiles'
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username!: string;
  private token = environment


  constructor(private http: HttpClient) { }
}
