import { ORDER_DATA } from './actionTypes';
import axios from 'axios';


export const getOrderData=(page)=>(dispatch)=>{
    axios({
        method:'get',
        url:'/json/orders.json'
    }).then((resp)=>{
        dispatch({
            type:ORDER_DATA,
            currentPage:page,
            obj:resp.data
        })
    });
}