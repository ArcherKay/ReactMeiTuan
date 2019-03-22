import {
  GET_LIST_DATA,
  LEFT_CLICK,
  ADD_SELECT_ITEM,
  MINUS_SELECT_ITEM,
  SHOW_CHOOSE_CONTENT,
  CLEAR_CAR
} from "../actions/actionTypes";

const initState = {
  listData: {},
  //记录当前点击的是哪一项
  currentLeftIndex: 0,
  showChooseContent: false,
  poiInfo:{}
};
const getListData = (state, action) => {
  if(Object.keys(state.listData).length>0)
  {
    return { ...state};
  }
  else
  {
    return { ...state,poiInfo: action.obj.data ,listData: action.obj.data };
  }
};

const itemClick = (state, action) => {
  return { ...state, currentLeftIndex: action.obj.currentLeftIndex };
};
const dealWithSelectItem = (state, action, type) => {
  let listData = state.listData;
  // 找到外层，左边list列表
  let list = listData.food_spu_tags || [];
  // 通过列表找到左边item使用数据，也就是点击的item数据
  let currentItem =list[action.obj.outIndex===undefined? state.currentLeftIndex:action.obj.outIndex];
  // 对当前点击的这个item的chooseCount进行加一或者减一
  if (type === ADD_SELECT_ITEM) {
    currentItem.spus[action.obj.index].chooseCount++;
  } else {
    currentItem.spus[action.obj.index].chooseCount--;
  }
  let _listData = JSON.parse(JSON.stringify(listData));
  return _listData;
};
const addSelectItem = (state, action) => {
  return {
    ...state,
    listData: dealWithSelectItem(state, action, ADD_SELECT_ITEM)
  };
};
const minusSelectItem = (state, action) => {
  return {
    ...state,
    listData: dealWithSelectItem(state, action, MINUS_SELECT_ITEM)
  };
};
const showChooseContent = (state, action) => {
  return { ...state, showChooseContent: action.obj.flag };
};
const clearCar = (state) => {
    let listData = state.listData;
    // 找到外层，左边list列表
    let list = listData.food_spu_tags || [];

    for (let i = 0; i < list.length; i++) {
        let spus = list[i].spus || [];
        for (let j = 0; j < spus.length; j++) {
            spus[j].chooseCount=0;
        }
    }
    return { ...state, showChooseContent: JSON.parse(JSON.stringify(listData)) };
  };
  

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_DATA:
      return getListData(state, action);
    case LEFT_CLICK:
      return itemClick(state, action);
    case ADD_SELECT_ITEM:
      return addSelectItem(state, action);
    case MINUS_SELECT_ITEM:
      return minusSelectItem(state, action);
    case SHOW_CHOOSE_CONTENT:
      return showChooseContent(state, action);
      case CLEAR_CAR:
      return clearCar(state, action);
    default:
      return state;
  }
};

export default menuReducer;
