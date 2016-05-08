import { Action } from 'redux';

export interface IncrementAction extends Action {
}

const type = 'INCREMENT';
const create = (): IncrementAction => ({ type });
const is = (action: { type: string; }): boolean => action.type === type;

export { create, is };
