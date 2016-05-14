import { Action } from 'redux';
import { is as isDecrementAction } from '../actions/decrement';
import { is as isIncrementAction } from '../actions/increment';
import { State } from '../types/';

const reducer = (state: State = { count: 0 }, action: Action): State => {
  if (isIncrementAction(action)) return { count: state.count + 1 };
  if (isDecrementAction(action)) return { count: state.count - 1 };
  return state;
};

export { reducer };
