import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-pool-gallon',
  templateUrl: './pool-gallon.component.html',
  styleUrls: ['./pool-gallon.component.css']
})
export class PoolGallonComponent implements OnInit {
  // Component variables
  gallons: number = 0;
  shapes: any = [
    { text: "Rectangular", value: "rect" }, { text: "Triangular", value: "tri" }, { text: "Circular", value: "circ" }];
  shape: any = ""
  length: string = "";
  width: string = "";
  depth1: string = "";
  //depth2: string = "";

  poolGallonForm = new FormGroup({
    gallons: new FormControl(''),
    shape: new FormControl(''),
    length: new FormControl(''),
    width: new FormControl(''),
    depth1: new FormControl(''),
    depth2: new FormControl('')
  });


  constructor() { }

  ngOnInit() {
    // this.poolShape = this.poolShapes[0].value;
    this.poolGallonForm.patchValue({
      shape: this.shapes[0].value
    });
  }

  calculatePoolGallons() {
    let avgDepth = (Number(this.poolGallonForm.get('depth1').value + Number(this.poolGallonForm.controls['depth2'].value))/2
    // let poolDepthAverage = (Number(this.poolDepth1) + Number(this.poolDepth2)) / 2;
    switch(this.poolGallonForm.controls['shape'].value) {
      case "rect": {
        //this.poolGallons = Number(this.poolLength) * Number(this.poolWidth) * poolDepthAverage * 7.5;
        break;
      }
      case "tri": {
        console.log("Triangle yall");
        break;
      }
      case "circ": {
        //this.poolGallons = 3.14 * Number(this.poolWidth) * Number(this.poolWidth) * poolDepthAverage * 7.5;
        break;
      }
    }

  }
}
