import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import {exhaustMap, flatMap, pluck} from 'rxjs/operators';

import * as actions from '../actions';
import { Model } from '../../models/model';
import {of as observableOf} from 'rxjs';


@Injectable()
export class ModelEffects {
  constructor(private actions$: Actions, private db: AngularFireDatabase) {}

  // @Effect()
  // increment$ = this.actions$
  //   .pipe(
  //     ofType(actions.INCREMENT),
  //     exhaustMap((model) => this.db.object('model').set(model))
  //   );
  //
  //
  // @Effect()
  // decrement$ = this.actions$
  //   .pipe(
  //     ofType(actions.DECREMENT),
  //     pluck('payload'),
  //     flatMap((model: Model) => this.db.object('model').set(model))
  //   );
}
