import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/firestore';

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

  // @Effect()
  // putEvent$ = this.actions$.pipe();

  constructor(private actions$: Actions, private readonly eventFirebase: EventsFirebaseService) { }
}
