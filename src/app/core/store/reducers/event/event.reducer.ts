import * as EventActions from '../../actions/event.action';
import { Event } from '../../../models/index';
import {EventReducerAdapter} from '@app/core/store/reducers/event/event-reducer.adapter';

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
      return EventReducerAdapter.fetchEvents(state, action);
    }
    case EventActions.FETCH_EVENTS_SUCCESS: {
      return EventReducerAdapter.fetchEventsSuccess(state, action);
    }
    case EventActions.FETCH_EVENTS_FAILED: {
      return EventReducerAdapter.fetchEventsFailed(state, action);
    }
    case EventActions.CREATE_EVENT: {
      return EventReducerAdapter.createEvent(state, action);
    }
    case EventActions.CREATE_EVENT_SUCCESS: {
      return EventReducerAdapter.createEventSuccess(state, action);
    }
    case EventActions.CREATE_EVENT_FAILED: {
      return EventReducerAdapter.createEventFailed(state, action);
    }
    default: {
      return state;
    }
  }
}

export const getEvents = (state: State) => state.events;
export const getPending = (state: State) => state.pending;
export const getError = (state: State) => state.error;
