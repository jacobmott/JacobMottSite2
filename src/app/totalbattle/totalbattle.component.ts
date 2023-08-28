import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalbattle',
  templateUrl: './totalbattle.component.html',
  styleUrls: ['./totalbattle.component.scss']
})
export class TotalbattleComponent implements OnInit {

  dominance: number = 0;
  authority: number = 0;
  leadership: number = 0;

  leadership_calculations_lvl4_m_r: string = "leadership_calculations_lvl4_m_r";
  leadership_calculations_lvl4_melee: string = "leadership_calculations_lvl4_melee";  


  leadership_calculations_lvl3_m_r: string = "leadership_calculations_lvl3_m_r";
  leadership_calculations_lvl3_melee: string = "leadership_calculations_lvl3_melee";  


  leadership_calculations_lvl2_m_r: string = "leadership_calculations_lvl2_m_r";
  leadership_calculations_lvl2_melee: string = "leadership_calculations_lvl2_melee"; 


  

  authority_calculations: string = "authority_calculations";
  dominance_calculations: string = "dominance_calculations";


  constructor() { }

  ngOnInit(): void {
  }


  somethingChanged(event: any) {
    console.log("something changed");
    console.dir(event);
    this.doCalcs();
  }

  doCalcs() {
    let zeroString: string  = "0";
    // The Art of Stacking Troops
    // if you have level 4 level 3 level 2 ( levels of troops ) then the way to work it out is 
    



    // divide your captains Leadership by 2 then by 2 again and divide by 3 this will give you numer of Mounted and ranged 
    let number_mounted_and_ranged: number = Math.floor(this.leadership / 2);
    number_mounted_and_ranged = Math.floor(number_mounted_and_ranged / 2);
    number_mounted_and_ranged = Math.floor(number_mounted_and_ranged / 3);

    // ALL THE LAST DIGITS MUST BE ZERO IE 405 no 400 YES ALWAYS FINISH WITH ZERO
    let place: number = Math.floor(Math.log10(number_mounted_and_ranged)) + 1;

    place = Number("1"+zeroString.repeat(place-1));
    console.log("place3: "+place);

    number_mounted_and_ranged = Math.floor((number_mounted_and_ranged / place)) * place;
    let lv4MountedAndRanged: number = number_mounted_and_ranged;

    // Now the remaing troops is half of what you take mounted & Ranged so if the formula says 400 mounted and ranged of each 3 levels then its 200 of mele mele includes Spears & Swords.
    // 10 monsters of each level also and mercenaries also      
    let lv4Melee: number = number_mounted_and_ranged/2;



    this.leadership_calculations_lvl4_m_r = "Mounted and Ranged(L4): "+lv4MountedAndRanged.toString();
    this.leadership_calculations_lvl4_melee = "Melee(L4): "+lv4Melee;

    let lv3MountedAndRanged: number = lv4MountedAndRanged*2;
    let lv3Melee: number = lv4Melee*2;
    this.leadership_calculations_lvl3_m_r = "Mounted and Ranged(L3): "+lv3MountedAndRanged.toString();
    this.leadership_calculations_lvl3_melee = "Melee(L3): "+lv3Melee;


    let lv2MountedAndRanged: number = lv3MountedAndRanged*2;
    let lv2Melee: number = lv3Melee*2;
    this.leadership_calculations_lvl2_m_r = "Mounted and Ranged(L2): "+lv2MountedAndRanged.toString();
    this.leadership_calculations_lvl2_melee = "Melee(L2): "+lv2Melee;






  }

}
