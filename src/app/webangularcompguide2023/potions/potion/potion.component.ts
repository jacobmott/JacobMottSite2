import { Component, OnInit, Input } from '@angular/core';


import { Potion } from '../../shared';


@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.scss']
})
export class PotionComponent implements OnInit {
  @Input() potion: Potion = new Potion("test", "test", "test");

  constructor() { }

  ngOnInit(): void {
  }

}
