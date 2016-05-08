import { Effect } from 'redux-saga/effects';
import { saga as helloSaga } from './hello';

function* saga(): Iterable<Effect> {
  yield [
    helloSaga()
  ];
}

export { saga };
