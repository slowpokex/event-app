import * as EventActions from '../actions/event.action';
import { Event } from '../../models/event';

export interface State {
  pending: boolean;
  error: any;
  events: Array<Event>;
}

const initialState: State = {
  pending: false,
  error: null,
  events: []
};

export function reducer(state = initialState, action: EventActions.Actions): State {
  switch (action.type) {
    case EventActions.FETCH_EVENTS: {
      return {
        ...state,
        pending: true
      };
    }
    case EventActions.FETCH_EVENTS_SUCCESS: {
      const events = action.payload;
      return {
        ...state,
        pending: false,
        events
      };
    }
    case EventActions.FETCH_EVENTS_FAILED: {
      const error = action.payload;
      return {
        ...state,
        pending: false,
        error
      };
    }
    default: {
      return state;
    }
  }
}

export const getEvents = (state: State) => state.events;
export const getPending = (state: State) => state.pending;
export const getError = (state: State) => state.error;
