import { create as createHelloAction } from './actions/hello';
import { create as createDecrementAction } from './actions/decrement';
import { create as createIncrementAction } from './actions/increment';
import { createStore } from './store';

const main = (): void => {
  const store = createStore();

  // subscribe (dummy)
  store.subscribe(() => console.log(store.getState()));

  // dispatch (dummy)
  store.dispatch(createIncrementAction());
  store.dispatch(createIncrementAction());
  store.dispatch(createDecrementAction());
  store.dispatch(createIncrementAction());
  store.dispatch(createHelloAction('World!'));
  store.dispatch(createHelloAction('bouzuya'));

  console.log('OK');
};

main();
