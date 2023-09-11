import { Component, OnInit } from '@angular/core';
import { PotionsService } from './potions.service';
import { Potion } from '../shared';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.scss'],
  providers: [PotionsService],
})
export class PotionsComponent implements OnInit {
  potions: any;
  havePotionSelected: boolean = false;
  selectedPotion: string = '';
  defaultPotion: number = 1;

  constructor(
    private potionsService: PotionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.potions = this.potionsService.getPotions();
    console.log('getting potions in ngoninit');
    console.dir(this.potions);

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.defaultPotion = queryParams['defaultPotion'] || 1;
      this.selectedPotion = this.potionsService.getPotions()[this.defaultPotion-1].id;
      this.havePotionSelected = true;      
    });
  }

  showPotion(potionId: string) {
    console.log('Called showption with id' + potionId);
    this.selectedPotion = potionId;
    this.havePotionSelected = true;
  }

  haveSelection() {
    return this.havePotionSelected;
  }

  getPotion(): Potion {
    let potion: Potion | undefined;
    potion = this.potionsService.getPotion(this.selectedPotion);
    if (potion) {
      return potion;
    }
    return new Potion('undef', 'undef', 'undef');
  }
}
