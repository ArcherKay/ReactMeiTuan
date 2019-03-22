import { GET_LIST_DATA } from "../actions/actionTypes.js";

const initState = {
  list: [],
  filterData: null,
  page: 0,
  isend: false
};

const getListData = (state, action) => {
  let _listData = [];
  let _filterData = action.filterData || state.filterData;
  let _page = action.toFirstPage ? 0 : state.page;
  let _isend = false;
  if (_page === 0) {
    _listData = action.obj.data.poilist;
  } else {
    _listData = state.list.concat(action.obj.data.poilist);
  }
  _page = _page + 1;
  if (_page > 3) {
    _isend=true;
  }
  return { ...state, list: _listData, filterData: _filterData, page: _page,isend:_isend };
};

const contentListReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_DATA:
      return getListData(state, action);
    default:
      return state;
  }
};
export default contentListReducer;
