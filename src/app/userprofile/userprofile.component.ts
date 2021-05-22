import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Profiles } from '../classes/profiles';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profiles!:Profiles[];

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

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.searchUserName('Josphine-Ndanu');
  
}
}





