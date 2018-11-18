import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';

import * as fromModel from './model.reducer';
import * as fromEvent from './event.reducer';

export interface State {
  model: fromModel.State;
  events: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {
  model: fromModel.reducer,
  events: fromEvent.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];

// Model selector
export const getModelState = createFeatureSelector<fromModel.State>('model');
export const getValue = createSelector(getModelState, fromModel.getValue);

// Events selector
export const getEventsState = createFeatureSelector<fromEvent.State>('events');
export const getEventsPending = createSelector(getEventsState, fromEvent.getPending);
