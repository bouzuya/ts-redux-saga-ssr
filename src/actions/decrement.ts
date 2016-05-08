import { Action } from 'redux';

export interface DecrementAction extends Action {
}

const type = 'DECREMENT';
const create = (): DecrementAction => ({ type });
const is = (action: { type: string; }): boolean => action.type === type;

export { create, is };
