import { is as isHelloAction, HelloAction } from '../actions/hello';

import { takeEvery, Saga } from 'redux-saga';
import { call, Effect } from 'redux-saga/effects';

const helloWorld = (name: string): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      resolve();
    }, 1000);
  });
}

// worker saga
function* helloSaga(action: HelloAction): Iterable<Effect> {
  yield call(helloWorld, action.payload.name);
}

// watcher saga
function* saga(): Iterable<Effect> {
  yield* takeEvery(isHelloAction, helloSaga);
}

export { saga };
