import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObserverService } from './observer.service';

import { Subscription, interval } from 'rxjs';

import { Event } from '../shared';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss'],
  providers: [ObserverService],
})
export class ObserverComponent implements OnInit, OnDestroy {
  currentEvent: Event = new Event(
    'default',
    'default',
    'https://media.tenor.com/c5i2v-ApNbwAAAAC/warhammer-40k.gif'
  );
  private subscription: Subscription = new Subscription();

  events: Event[] = [
    new Event(
      'Lightning storm',
      'Be careful its electric out there!',
      'https://media.tenor.com/OKHYynDekG0AAAAC/cat-kitty.gif'
    ),
    new Event(
      'Tornado festival',
      'Be careful you might fly away!',
      'https://i.pinimg.com/originals/48/eb/7a/48eb7a4671e2ce3775c36ac9aef89c73.gif'
    ),
  ];

  constructor(private observerService: ObserverService) {}

  ngOnInit(): void {
    this.subscription = this.observerService.somethingHappened.subscribe(
      (event) => {
        this.currentEvent = event;
      }
    );

    interval(5000).subscribe((val) => { console.log("val: "+val); this.observerService.fireSomething(this.events[val % 2])} );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
