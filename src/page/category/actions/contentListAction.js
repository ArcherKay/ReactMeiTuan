import { GET_LIST_DATA } from './actionTypes';
import axios from 'axios';


export const getListData = (obj) => async (dispatch, getState) => {
    let url = '/json/homelist.json';
    if (obj.filterData || getState().contentListReducer.filterData) {
        url = '/json/listparams.json';
    }
    let resp = await axios({
        method: 'get',
        url: url
    });

    dispatch({
        type: GET_LIST_DATA,
        filterData: obj.filterData,
        toFirstPage: obj.toFirstPage,
        obj: resp.data
    })
}