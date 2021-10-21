import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from 'redux/reducer';

const composeDev = composeWithDevTools || compose;
const devTools = composeDev(applyMiddleware());

const store = createStore(reducer, devTools);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
