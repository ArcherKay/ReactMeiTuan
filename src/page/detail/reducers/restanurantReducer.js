import { RESTANURANT_DATA } from '../actions/actionTypes.js';

const initState = {
    resData: {},
};

const getData = (state, action) => {

    return {...state, resData: action.obj.data };
}
const restanurantReducer = (state = initState, action) => {

    switch(action.type) {
        case RESTANURANT_DATA: return getData(state, action);
        default: return state;
    }
};

export default restanurantReducer;