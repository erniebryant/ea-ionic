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
    },
    {
      "firstName": "Terry",
      "lastName": "Bradshaw",
      "primarySport": "Football"
    },
    {
      "firstName": "Nolan",
      "lastName": "Ryan",
      "primarySport": "Baseball"
    },
    {
      "firstName": "Michael",
      "lastName": "Phelps",
      "primarySport": "Swimming"
    },
    {
      "firstName": "Shannon",
      "lastName": "Miller",
      "primarySport": "Gymnastics"
    },
    {
      "firstName": "Magic",
      "lastName": "Johnson",
      "primarySport": "Basketball"
    },
    {
      "firstName": "Shooter",
      "lastName": "McGzvin",
      "primarySport": "Golf"
    },
    {
      "firstName": "Pete",
      "lastName": "Sampress",
      "primarySport": "Tennis"
    },
    {
      "firstName": "Steve",
      "lastName": "Wisnewski",
      "primarySport": "Football"
    }
]
  constructor() { }

  ngOnInit() {
  }

  getCoaches = () =>  {

  }
}
