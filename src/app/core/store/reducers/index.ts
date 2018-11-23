import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { Params } from '@angular/router';

import * as fromEvent from './event';
import * as fromRouter from '@ngrx/router-store';


/**
 * This is only for Router interface
 */
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  events: fromEvent.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  events: fromEvent.reducer,
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];

// Events selector
export const getEventsState = createFeatureSelector<fromEvent.State>('events');
export const getEventsValues = createSelector(getEventsState, fromEvent.getEvents);
export const getEventsPending = createSelector(getEventsState, fromEvent.getPending);
export const getEventsError = createSelector(getEventsState, fromEvent.getError);
