import 'babel-polyfill'; // for redux-saga (generator function)
import { applyMiddleware, createStore as create, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers/';
import { saga } from './sagas/';
import { State } from './types/';

const createStore = (): Store<State> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = create<State>(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(saga);
  return store;
};

export { createStore };
