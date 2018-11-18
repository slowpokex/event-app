import { Action } from '@ngrx/store';

export const INCREMENT = '[Model] Increment';
export const DECREMENT = '[Model] Decrement';

export class Increment implements Action {
  readonly type = INCREMENT;

  constructor() { }
}

export class Decrement implements Action {
  readonly type = DECREMENT;

  constructor() { }
}

export type Action = Increment | Decrement;
