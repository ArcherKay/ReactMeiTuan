import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer.js';
import contentListReducer from './contentListReducer.js';
import orderReducer from './orderReducer.js';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer.js';
import {routerReducer} from 'react-router-redux';


import { combineReducers } from  'redux';

const reducers=combineReducers({
    scrollViewReducer,
    tabReducer,
    categoryReducer,
    contentListReducer,
    orderReducer,
    router:routerReducer
})

export default reducers;