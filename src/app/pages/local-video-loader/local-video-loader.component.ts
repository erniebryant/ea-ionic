import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-local-video-loader',
  templateUrl: './local-video-loader.component.html',
  styleUrls: ['./local-video-loader.component.scss']
})
export class LocalVideoLoaderComponent implements OnInit {

  options = {};
    // max images to be selected, defaults to 15. If this is set to 1, upon
	// selection of a single image, the plugin will return it.
	// maximumImagesCount: 1,
	
	// max width and height to allow the images to be.  Will keep aspect
	// ratio no matter what.  So if both are 800, the returned image
	// will be at most 800 pixels wide and 800 pixels tall.  If the width is
	// 800 and height 0 the image will be 800 pixels wide if the source
	// is at least that wide.
	// width: 800,
	// height: 800,
	
	// quality of resized image, defaults to 100
	// quality: 100
// };
 imagePicker = new ImagePicker();

 file = null;

  constructor(public plt: Platform,
    private route: ActivatedRoute,
    private router: Router
    // private imagePicker: ImagePicker
    ) { }

  ngOnInit() {
  }

  getVideo = () => {
    
    // if (!this.plt.is("desktop"))
    // {
      alert("clicked");
      this.imagePicker.getPictures(this.options).then((results) => {
        alert("Results: " + results);
        console.log("Results: " + results);
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            this.file = results[i];
            this.router.navigate(['/editor', this.file ]);
        }
      }, (err) => { 
        alert("Error: " + err);
        console.log("Error: " + err);
        this.router.navigate(['/editor']);
      });
    }

    // if(this.file){
    //   alert("this.file = " + this.file);
    //   console.log("this.file = " + this.file);
    //   this.router.navigateByUrl('/editor?video=' + this.file);
    //   alert("navigated");
    //   console.log("navigated");
    // }
    // else{
    //   alert("this.file is null!");
    //   console.log("this.file is null!");
    // }
  
}
