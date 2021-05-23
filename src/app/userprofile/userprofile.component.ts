import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Profiles } from '../classes/profiles';
import { Repos } from '../classes/repos';
import { ReposService } from '../repos.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profiles!:Profiles[];
  repos!:Repos[];

  constructor(private githubService: GithubService, private reposService: ReposService) { }

  searchUserName(username: string){
    this.githubService.SearchUser(username).then(
      ()=>{
        this.profiles = this.githubService.profiles;
        console.log(this.profiles);
      },
      (error: any)=>{
        console.log(error)
      }
    )
   }

   displayRepos(username: string){
     
     
   }

  //  displayRepos(username: any){
  //    this.reposService. displayRepos(username).then(
  //      ()=>{
  //        this.repos=this.reposService.repos;
  //        console.log(this.repos);
  //     },
  //     (error: any)=>{
  //       console.log(error)
  //     }
  //   )
  //  }
  

  ngOnInit(): void {
    this.searchUserName('Josphine-Ndanu');

  this.reposService.getRepoInfo('Josphine-Ndanu').subscribe((response) => {
    console.log(response)
    this.repos=response
  })
  }
}





