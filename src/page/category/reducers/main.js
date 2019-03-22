import { combineReducers } from 'redux';
import headerReducer from './headerReducer.js';
import contentListReducer from './contentListReducer.js';
const reducers = combineReducers({
    headerReducer,
    contentListReducer
});


export default reducers;