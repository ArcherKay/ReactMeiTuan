import { LIST_DATA } from './actionTypes';
import axios from 'axios';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';


export const getListData=(page)=>(dispatch)=>{
    dispatch({
        type:CHANGEREADYSTATE,
        obj:false
    })
    axios({
        method:'get',
        url:'/json/listparams.json'
    }).then((resp)=>{
        dispatch({
            type:LIST_DATA,
            currentPage:page,
            obj:resp.data
        })
        dispatch({
            type:CHANGEREADYSTATE,
            obj:true
        })
    });
}