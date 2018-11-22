import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { random } from 'lodash';

import { Timestamp, Event } from '@app/core/models';

import * as fromEvents from '@app/core/store/reducers';
import * as eventAction from '@app/core/store/actions/event.action';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  eventForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    picture: ['', Validators.required]
  });

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private store$: Store<fromEvents.State>
  ) { }

  ngOnInit() {
  }

  onClickAdd() {
    if (this.eventForm.invalid) {
      return;
    }
    const id = +random(Number.MAX_SAFE_INTEGER).toFixed(0);
    const rawData = this.eventForm.getRawValue();
    const creationDate: Timestamp = { seconds: +(Date.now() / 1000).toFixed(0), nanoseconds: 0 };
    const newEvent: Event = { id, creationDate, ...rawData } as Event;
    this.store$.dispatch(new eventAction.CreateEvent(newEvent));
  }

  onClickBack() {
    this.router.navigate(['/main']);
  }
}
