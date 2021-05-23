import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
username!:any;
@Output() emitUserName = new EventEmitter<any>();
  search(username:any) {
    this.emitUserName.emit(username);
  }
  constructor() { }

  ngOnInit() {
  }

}
