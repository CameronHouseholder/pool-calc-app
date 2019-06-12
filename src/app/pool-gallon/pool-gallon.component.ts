import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool-gallon',
  templateUrl: './pool-gallon.component.html',
  styleUrls: ['./pool-gallon.component.css']
})
export class PoolGallonComponent implements OnInit {
  // Component variables
  poolGallons: number = 0;
  poolShapes: any = [
    { text: "Rectangular", value: "rect" }, { text: "Triangular", value: "tri" }, { text: "Circular", value: "circ" }];
  poolShape: any = ""
  poolLength: string = "";
  poolWidth: string = "";
  poolDepth1: string = "";
  poolDepth2: string = "";


  constructor() { }

  ngOnInit() {
    this.poolShape = this.poolShapes[0].value;
  }

  calculatePoolGallons() {
    let poolDepthAverage = (Number(this.poolDepth1) + Number(this.poolDepth2)) / 2;
    switch(this.poolShape) {
      case "rect": {
        this.poolGallons = Number(this.poolLength) * Number(this.poolWidth) * poolDepthAverage * 7.5;
        break;
      }
      case "tri": {
        console.log("Triangle yall");
        break;
      }
      case "circ": {
        this.poolGallons = 3.14 * Number(this.poolWidth) * Number(this.poolWidth) * poolDepthAverage * 7.5;
        break;
      }
    }

  }
}
