import {Component, Input, OnInit} from '@angular/core';
import * as url from "url";
import {PortfolioService} from './portfolio.service';
import {Image} from './portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './portfolio.component.html',

})

export class PortfolioComponent implements OnInit{
  title = 'Portfolio';
  images: Image[] = [];
  constructor(private portfolioService: PortfolioService) {

    var testScript = document.createElement("script");
    testScript.setAttribute("id", "testScript");
    testScript.setAttribute("src", "assets/js/fliplightbox.min.js");
    document.body.appendChild(testScript);
    var testScript1 = document.createElement("script");
    testScript1.setAttribute("id", "testScript1");
    testScript1.setAttribute("src", "assets/js/flip1.js");
    document.body.appendChild(testScript1);
  }

  ngOnInit(){
    let a = this.portfolioService.getImages ().subscribe ( images => {
      this.images = images.data;
      console.log(this.images);
    } );
  }
}

