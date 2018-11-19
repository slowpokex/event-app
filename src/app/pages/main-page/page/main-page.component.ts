import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromEvents from '@app/core/store/reducers';
import * as eventAction from '@app/core/store/actions/event.action';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  events$ = this.store$.pipe(select(fromEvents.getEventsValues));
  pending$ = this.store$.pipe(select(fromEvents.getEventsPending));
  error$ = this.store$.pipe(select(fromEvents.getEventsError));

  constructor(private store$: Store<fromEvents.State>) { }

  ngOnInit() {
  }

  onClick() {
    this.store$.dispatch(new eventAction.FetchEvents());
  }
}
