import { CHANGE_TAB } from './actionTypes';


export const changeTab=(obj)=>{
    return{
        type:CHANGE_TAB,
        obj:obj
    }
}