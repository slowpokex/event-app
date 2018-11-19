import { Action } from '@ngrx/store';
import { Event } from '@app/core/models';

export const FETCH_EVENTS = '[Event] Fetch';
export const FETCH_EVENTS_SUCCESS = '[Event] Fetch Success';
export const FETCH_EVENTS_FAILED = '[Event] Fetch Failed';

export class FetchEvents implements Action {
  readonly type = FETCH_EVENTS;

  constructor() { }
}

export class FetchEventsSuccess implements Action {
  readonly type = FETCH_EVENTS_SUCCESS;

  constructor(public payload: Array<Event>) { }
}

export class FetchEventsFailed implements Action {
  readonly type = FETCH_EVENTS_FAILED;

  constructor(public payload: any) { }
}

export type Actions = FetchEvents | FetchEventsSuccess | FetchEventsFailed;
