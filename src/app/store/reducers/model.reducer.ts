import * as modelAction from '../actions/model.action';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0
};

export function reducer(state = initialState, action: modelAction.Action): State {
  switch (action.type) {
    case modelAction.INCREMENT: {
      return {
        ...state, value: state.value + 1
      };
    }
    case modelAction.DECREMENT: {
      return {
        ...state, value: state.value - 1
      };
    }
    default: return state;
  }
}

export const getValue = (state: State) => state.value;
