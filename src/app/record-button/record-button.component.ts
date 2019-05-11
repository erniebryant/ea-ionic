import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var Replay:any;

@Component({
  selector: 'app-record-button',
  templateUrl: './record-button.component.html',
  styleUrls: ['./record-button.component.scss']
})
export class RecordButtonComponent implements OnInit {

  constructor(public plt: Platform) { }

  isRecording = false;

  ngOnInit() {
    
  }

  onRecordClick = () => {
    this.isRecording = !this.isRecording;
    alert("isRecording = " + this.isRecording);

    if (this.isRecording) {
      this.stopRecording();
    }
    else {
      this.startRecording(true);
    }

  }

  startRecording = (enableMic) => {
    if (this.plt.is("ios")) {
      alert("is ios!");
      window.cordova.plugins.Replay.startRecording(enableMic,
        function() {
            this.isRecording = true;
          }, function(err) {
            console.log(err);
          }
      );
    }
    else {
      alert("is not ios!");
    }
    
  };

  stopRecording = () => {
    if (this.plt.is("ios")) {
      alert("is ios!");

      window.cordova.plugins.Replay.stopRecording(
        function() {
          this.isRecording = false;
            console.log('ok!');
        }, function(err) {
          console.log(err);
        }
      );
    }
    else {
      alert("is not ios!");
    }
      
  }

}
