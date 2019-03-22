import { GET_LIST_DATA, LEFT_CLICK,ADD_SELECT_ITEM,MINUS_SELECT_ITEM,SHOW_CHOOSE_CONTENT,CLEAR_CAR } from '../actions/actionTypes.js';
import axios from 'axios';


export const itemClick = (obj) => {
    return {
        type: LEFT_CLICK,
        obj: obj
    }
}
export const getListData = () => async (dispatch) => {

    let resp = await axios({
        method: 'get',
        url: '/json/food.json'
    });

    dispatch({
        type: GET_LIST_DATA,
        obj: resp.data
    })
}
export const addSelectItem = (obj) => {
    return {
        type: ADD_SELECT_ITEM,
        obj: obj
    }
}
export const minusSelectItem = (obj) => {
    return {
        type: MINUS_SELECT_ITEM,
        obj: obj
    }
}

export const showChoose = (obj) => {
    return {
        type: SHOW_CHOOSE_CONTENT,
        obj: obj
    }
}
export const clearCar = (obj) => {
    return {
        type: CLEAR_CAR,
        obj: obj
    }
}


