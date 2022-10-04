import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-slideout',
  templateUrl: './slideout.component.html',
  styleUrls: ['./slideout.component.scss']
})
export class SlideoutComponent implements OnInit {

  

  slideout: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(event: any){
    console.log("clicked");
    this.slideout = !this.slideout;
  }


}
