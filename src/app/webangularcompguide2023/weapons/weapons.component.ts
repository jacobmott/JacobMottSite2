import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { WeaponsService } from './weapons.service';

import { Weapon } from '../shared';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss'],
  providers: [WeaponsService],
})
export class WeaponsComponent implements OnInit {
  weapons: any;
  haveWeaponSelected: boolean = false;
  selectedWeapon: string = '';
  defaultWeapon: number = 1;
  constructor(
    private weaponsService: WeaponsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.weapons = this.weaponsService.getWeapons();
    console.log('getting weapons in ngoninit');
    console.dir(this.weapons);
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.defaultWeapon = queryParams['defaultWeapon'] || 1;
      this.selectedWeapon = this.weaponsService.getWeapons()[this.defaultWeapon-1].id;
      this.haveWeaponSelected = true;
      this.onClickWeapon(this.selectedWeapon);
    });    
  }

  showWeapons(potionId: string) {
    console.log('Called showption with id' + potionId);
    this.selectedWeapon = potionId;
    this.haveWeaponSelected = true;
  }

  haveSelection() {
    return this.haveWeaponSelected;
  }

  getWeapon(): Weapon {
    let weapon: Weapon | undefined;
    weapon = this.weaponsService.getWeapon(this.selectedWeapon);
    if (weapon) {
      return weapon;
    }
    return new Weapon('undef', 'undef', 'undef');
  }

  onClickWeapon(weaponId: string): void {
    this.router.navigate([weaponId], { relativeTo: this.route });
  }
}
