import { COMMENT_LIST_DATA } from '../actions/actionTypes.js';

const initState = {
    commentData:{},
    commentList:[]
};
const getListData=(state, action)=>{
    let list=[];
    if(state.commentList.length>0){
        list  =state.commentList.concat(action.obj.data.comments);
    }else{
        list=action.obj.data.comments;
    }
    
    return {...state,commentData:action.obj.data,commentList:list}

}
const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case COMMENT_LIST_DATA: return getListData(state, action);
        default: return state;
    }
}
export default commentReducer;