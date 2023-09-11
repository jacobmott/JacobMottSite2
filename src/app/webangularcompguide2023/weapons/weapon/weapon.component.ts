import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { WeaponsService } from '../weapons.service';

import { Weapon } from '../../shared';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit {
  weapon: Weapon = new Weapon('test', 'test', 'test');

  constructor(
    private weaponsService: WeaponsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      let weapon: Weapon | undefined;
      weapon = this.weaponsService.getWeapon(params['id']);
      if (weapon) {
        this.weapon = weapon;
      }
    });
  }
}
