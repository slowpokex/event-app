import { State } from '@app/core/store/reducers/event/event.reducer';
import * as EventActions from '../../actions/event.action';


/**
 * Available adapters for event reducers
 */
export class EventReducerAdapter {
  static fetchEvents = (state: State, action: EventActions.Actions): State => ({
      ...state,
      pending: true
  })

  static fetchEventsSuccess = (state: State, action: EventActions.Actions): State => ({
    ...state,
    pending: false,
    error: null,
    events: action.payload
  })

  static fetchEventsFailed = (state: State, action: EventActions.Actions): State => ({
    ...state,
    pending: false,
    error: action.payload
  })

  static createEvent = (state: State, action: EventActions.Actions): State => ({
    ...state,
    pending: true
  })

  static createEventSuccess = (state: State, action: EventActions.Actions): State => ({
    ...state,
    pending: false,
    error: null,
  })

  static createEventFailed = (state: State, action: EventActions.Actions): State => ({
    ...state,
    pending: false,
    error: action.payload
  })
}
