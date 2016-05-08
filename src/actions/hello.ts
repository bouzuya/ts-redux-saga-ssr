import { Action } from 'redux';

export interface HelloAction extends Action {
  payload: {
    name: string;
  };
}

const type = 'HELLO';
const create = (name: string): HelloAction => ({ type, payload: { name } });
const is = (action: { type: string; }): boolean => action.type === type;

export { create, is };
