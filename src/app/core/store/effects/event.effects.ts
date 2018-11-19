import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { map as lodashMap } from 'lodash';

import { EventsFirebaseService } from '@app/core/firebase';
import * as actions from '@app/core/store/actions/event.action';
import { Event } from '@app/core/models';

@Injectable()
export class EventEffects {

  @Effect()
  getEvents$ = this.actions$.pipe(
    ofType(actions.FETCH_EVENTS),
    exhaustMap(() => this.eventFirebase.getEvents().snapshotChanges().pipe(
      map((eventActions: Array<DocumentChangeAction<Event>>) => {
        const values =  lodashMap(eventActions, (action: DocumentChangeAction<Event>) => {
          const data = action.payload.doc.data() as Event;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
        return new actions.FetchEventsSuccess(values);
      }),
      catchError((error: any) => observableOf(new actions.FetchEventsFailed(error)))
    )),
  );

  // @Effect()
  // putEvent$ = this.actions$.pipe();

  constructor(private actions$: Actions, private readonly eventFirebase: EventsFirebaseService) { }
}
