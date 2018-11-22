import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf, from } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { EventsFirebaseService } from '@app/core/firebase';
import * as actions from '@app/core/store/actions/event.action';
import { Event } from '@app/core/models';

@Injectable()
export class EventEffects {

  @Effect()
  getEvents$ = this.actions$.pipe(
    ofType(actions.FETCH_EVENTS),
    switchMap(() => this.eventFirebase.getEvents().valueChanges().pipe(
      map((events: Array<Event>) => new actions.FetchEventsSuccess(events)),
      catchError((error: any) => observableOf(new actions.FetchEventsFailed(error)))
    )),
  );

  @Effect()
  createEvent$ = this.actions$.pipe(
    ofType(actions.CREATE_EVENT),
    map((action: actions.Actions) => action.payload),
    switchMap((newEvent: Event) => from(this.eventFirebase.getEvents().add(newEvent)).pipe(
        map(() => new actions.CreateEventSuccess(newEvent)),
        catchError((error: any) => observableOf(new actions.CreateEventFailed(error)))
      )),
  );

  @Effect({ dispatch: false })
  createEventSuccess$ = this.actions$.pipe(
    ofType(actions.CREATE_EVENT_SUCCESS),
    tap(() => {
      this.router.navigate(['./main']);
    })
  );

  @Effect({ dispatch: false })
  createEventFailed$ = this.actions$.pipe(
    ofType(actions.CREATE_EVENT_FAILED),
    tap(() => {
      this.router.navigate(['./main']);
    })
  );

  constructor(
    private actions$: Actions,
    private readonly router: Router,
    private readonly eventFirebase: EventsFirebaseService
  ) { }
}
