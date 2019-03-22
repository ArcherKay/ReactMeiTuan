import { CHANGEREADYSTATE } from './scrollViewActionsTypes.js';

const initState = {
    readyToLoad: true
};


const changeState = (state, action) => {

    return { ...state, readyToLoad: action.obj };
}
const scrollViewReducer = (state = initState, action) => {

    switch(action.type) {
        case CHANGEREADYSTATE: return changeState(state, action);
        default: return state;
    }
};

export default scrollViewReducer;