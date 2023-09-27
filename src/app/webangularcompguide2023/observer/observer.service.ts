import { Subject } from 'rxjs';

import { Event } from '../shared';

export class ObserverService {
  somethingHappened = new Subject<Event>();


  fireSomething(event: Event) {
    this.somethingHappened.next(event);
  }
}
