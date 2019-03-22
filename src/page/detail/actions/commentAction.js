import { COMMENT_LIST_DATA } from './actionTypes';
import axios from 'axios';


export const getListData = () => async (dispatch) => {
   
    let resp = await axios({
        method: 'get',
        url: '/json/comments.json'
    });

    dispatch({
        type: COMMENT_LIST_DATA,
        obj: resp.data
    })
}