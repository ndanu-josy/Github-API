import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import {Repos} from "../classes/repos"

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos!:Repos[];
  constructor(public githubService: GithubService) { }

  ngOnInit(): void {
  }

}
