import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss']
})
export class CoachDetailComponent implements OnInit {

  @Input() coach={name:"Michael Jordasn"};

  constructor() { }

  ngOnInit() {
  }

}
