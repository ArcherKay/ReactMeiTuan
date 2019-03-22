import { createStore,applyMiddleware } from 'redux';

import mainReducer from './reducers/main.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store=createStore(mainReducer,applyMiddleware(logger,thunk));

export default store;