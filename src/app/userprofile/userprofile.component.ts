import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubService } from '../github.service';
import { Profiles } from '../classes/profiles';
import { Repos } from '../classes/repos';
import { ReposService } from '../repos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  profiles!: Profiles[];
  repos!: Repos[];
  notFound!: boolean;

  constructor(
    private githubService: GithubService,
    private reposService: ReposService,
    private router: Router
  ) {}

  searchUserName(username: string) {
    this.githubService.SearchUser(username).then(
      () => {
        this.profiles = this.githubService.profiles;
        console.log(this.profiles);
      },
      (error: any) => {
        // this.notFound = !this.notFound;
       alert("Sorry, User not found");
      }
    );
  }

 

  ngOnInit(): void {
    this.router.navigate([''])
    this.searchUserName('Josphine-Ndanu');

    this.reposService.getRepoInfo('Josphine-Ndanu').subscribe((response) => {
      console.log(response);
      this.repos = response;
    });
  }

  username!: any;


  search(username: any) {
    this.searchUserName(username);
     this.reposService.getRepoInfo(username).subscribe((response) => {
       this.repos= response;
     },error => {
      this.notFound = !this.notFound;
    });
 
     
  }
}
