import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-painter-button',
  templateUrl: './screen-painter-button.component.html',
  styleUrls: ['./screen-painter-button.component.scss']
})
export class ScreenPainterButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClick = () => {
    alert("clicked");
  }
}
