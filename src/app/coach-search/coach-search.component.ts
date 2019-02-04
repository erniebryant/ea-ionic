import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-search',
  templateUrl: './coach-search.component.html',
  styleUrls: ['./coach-search.component.scss']
})
export class CoachSearchComponent implements OnInit {

  public searchText : string;
  public mockData = [
    {
      "firstName": "Michael",
      "lastName": "Jordan",
      "primarySport": "Basketball"
    },
    {
      "firstName": "Demarcus",
      "lastName": "Cousins",
      "primarySport": "Basketball"
    },
    {
      "firstName": "Kevin",
      "lastName": "Knox",
      "primarySport": "Basketball"
    }
]
  constructor() { }

  ngOnInit() {
  }

  getCoaches = () =>  {

  }
}
