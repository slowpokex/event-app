import { Action } from '@ngrx/store';
import { Event } from '@app/core/models';

export const FETCH_EVENTS = '[Event] Fetch Events';
export const FETCH_EVENTS_SUCCESS = '[Event] Fetch Events Success';
export const FETCH_EVENTS_FAILED = '[Event] Fetch Events Failed';

export const CREATE_EVENT = '[Event] Create Event';
export const CREATE_EVENT_SUCCESS = '[Event] Create Event Success';
export const CREATE_EVENT_FAILED = '[Event] Create Event Failed';

export const UPDATE_EVENT = '[Event] Update Event';
export const UPDATE_EVENT_SUCCESS = '[Event] Update Event Success';
export const UPDATE_EVENT_FAILED = '[Event] Update Event Failed';

export const DELETE_EVENT = '[Event] Delete Event';
export const DELETE_EVENT_SUCCESS = '[Event] Delete Event Success';
export const DELETE_EVENT_FAILED = '[Event] Delete Event Failed';

/**
 * Getting events actions
 **/
export class FetchEvents implements Action {
  readonly type = FETCH_EVENTS;

  constructor(public payload?: any) { }
}

export class FetchEventsSuccess implements Action {
  readonly type = FETCH_EVENTS_SUCCESS;

  constructor(public payload: Array<Event>) { }
}

export class FetchEventsFailed implements Action {
  readonly type = FETCH_EVENTS_FAILED;

  constructor(public payload: any) { }
}

/**
 * Create event actions
 **/
export class CreateEvent implements Action {
  readonly type = CREATE_EVENT;

  constructor(public payload: Event) { }
}

export class CreateEventSuccess implements Action {
  readonly type = CREATE_EVENT_SUCCESS;

  constructor(public payload: Event) { }
}

export class CreateEventFailed implements Action {
  readonly type = CREATE_EVENT_FAILED;

  constructor(public payload: any) { }
}

/**
 * Update event actions
 **/
export class UpdateEvent implements Action {
  readonly type = UPDATE_EVENT;

  constructor(public payload: Event) { }
}

export class UpdateEventSuccess implements Action {
  readonly type = UPDATE_EVENT_SUCCESS;

  constructor(public payload: Event) { }
}

export class UpdateEventFailed implements Action {
  readonly type = UPDATE_EVENT_FAILED;

  constructor(public payload: any) { }
}

/**
 * Delete event actions
 **/
export class DeleteEvent implements Action {
  readonly type = DELETE_EVENT;

  constructor(public payload: number) { }
}

export class DeleteEventSuccess implements Action {
  readonly type = DELETE_EVENT_SUCCESS;

  constructor(public payload: Event) { }
}

export class DeleteEventFailed implements Action {
  readonly type = DELETE_EVENT_FAILED;

  constructor(public payload: any) { }
}

export type Actions = FetchEvents
  | FetchEventsSuccess
  | FetchEventsFailed
  | CreateEvent
  | CreateEventSuccess
  | CreateEventFailed
  | UpdateEvent
  | UpdateEventSuccess
  | UpdateEventFailed
  | DeleteEvent
  | DeleteEventSuccess
  | DeleteEventFailed;
