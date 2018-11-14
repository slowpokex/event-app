import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import * as fromModel from './model.reducer';

export interface State {
  model: fromModel.State;
}

export const reducers: ActionReducerMap<State> = {
  model: fromModel.reducer
};

export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];

export const getValueState = createFeatureSelector<fromModel.State>('model');
export const getValue = createSelector(getValueState, fromModel.getValue);
