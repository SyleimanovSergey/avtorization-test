import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from 'redux/reducer';
import { applyMiddleware, compose, createStore } from 'redux';

const composeDev = composeWithDevTools || compose;
const devTools = composeDev(applyMiddleware());

const store = createStore(reducer, devTools);

export default store;
