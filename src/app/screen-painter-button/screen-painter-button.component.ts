import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-screen-painter-button',
  templateUrl: './screen-painter-button.component.html',
  styleUrls: ['./screen-painter-button.component.scss']
})
export class ScreenPainterButtonComponent implements OnInit {

  showPaintPanel:boolean = false;
  @Input() getScreenPaintPanelStatus;
  @Output() getScreenPaintPanelStatusChange = new EventEmitter<boolean>();
  

  constructor() { }

  ngOnInit() {
  }

  public onPaintButtonClick = () => {
    //alert("clicked");
    this.showPaintPanel = !this.showPaintPanel; 

    var elem = document.querySelector('canvas') as HTMLElement;

    if (this.showPaintPanel){
      elem.style.zIndex = "0";
    }
    else {
      elem.style.zIndex = "-999";
    }
  }

}
