import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
//declare var Replay:any;

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
      this.startIosRecording();
    }
    else if (this.plt.is("android")){
      this.startAndroidRecording();
    }
    else {
      this.startWebRecording();
    }
    
  };

  stopRecording = () => {
    if (this.plt.is("ios")) {
      this.stopIosRecording();
    }
    else if (this.plt.is("android")){
      this.stopAndroidRecording();
    }
    else {
      this.stopWebRecording();
    }
      
  }

  startIosRecording = () => {
    alert("is ios!");
      // window.cordova.plugins.Replay.startRecording(enableMic,
      //   function() {
      //       this.isRecording = true;
      //     }, function(err) {
      //       console.log(err);
      //     }
      // );
  }
  stopIosRecording = () => {
    alert("is ios!");

      // window.cordova.plugins.Replay.stopRecording(
      //   function() {
      //     this.isRecording = false;
      //       console.log('ok!');
      //   }, function(err) {
      //     console.log(err);
      //   }
      // );
  }

  startAndroidRecording = () => {
    alert("is Android startRecording");
    //Use ionic-screen-recorder
  }
  stopAndroidRecording = () => {
    alert("is Android stopRecording");
    //Use ionic-screen-recorder
  }

  startWebRecording = () => {
    alert("is Web startRecording");
    // use cordova-replay
  }
  stopWebRecording = () => {
    alert("is Web stopRecording");
    // use cordova-replay
  }
}
