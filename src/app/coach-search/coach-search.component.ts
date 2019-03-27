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
      "id":0,
      "firstName": "Michael",
      "lastName": "Jordan",
      "primarySport": "Basketball"
    },
    {
      "id":1,
      "firstName": "Demarcus",
      "lastName": "Cousins",
      "primarySport": "Basketball"
    },
    {
      "id":2,
      "firstName": "Kevin",
      "lastName": "Knox",
      "primarySport": "Basketball"
    },
    {
      "id":3,
      "firstName": "Terry",
      "lastName": "Bradshaw",
      "primarySport": "Football"
    },
    {
      "id":4,
      "firstName": "Nolan",
      "lastName": "Ryan",
      "primarySport": "Baseball"
    },
    {
      "id":5,
      "firstName": "Michael",
      "lastName": "Phelps",
      "primarySport": "Swimming"
    },
    {
      "id":6,
      "firstName": "Shannon",
      "lastName": "Miller",
      "primarySport": "Gymnastics"
    },
    {
      "id":7,
      "firstName": "Magic",
      "lastName": "Johnson",
      "primarySport": "Basketball"
    },
    {
      "id":8,
      "firstName": "Shooter",
      "lastName": "McGzvin",
      "primarySport": "Golf"
    },
    {
      "id":9,
      "firstName": "Pete",
      "lastName": "Sampress",
      "primarySport": "Tennis"
    },
    {
      "id":10,
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

  onSelect = (coach) => {
    
  }
}
