import { combineReducers } from 'redux';

import profileReducer from './adminReducer';

const reducer = combineReducers({ profileReducer });

export default reducer;
