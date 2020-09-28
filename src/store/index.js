import { createStore } from 'redux';
import RootReducer from './reducers';
import initialState from './initialState';
import { getState, setState } from './localStorage';

let persistedState = getState();
persistedState = persistedState ? persistedState : initialState;

const store = createStore(RootReducer, persistedState);

store.subscribe(() => {
    setState(store.getState());
});

export default store;
