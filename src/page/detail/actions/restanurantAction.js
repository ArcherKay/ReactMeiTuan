import { RESTANURANT_DATA } from './actionTypes';
import axios from 'axios';
// import qs from 'component/queryString';

export const getRestanurantData = () => async (dispatch) => {
  // let id = qs('id');
  // window.Rohr_Opt.Flag = 100011;
  // let token = window.Rohr_Opt.reload('/ajax/v6/poi/info?wmpoiid=' + id);
  // let resp = await axios({
  //   method: 'get',
  //   url: './json/restanurant.json',
  //   data: {
  //     url: encodeURIComponent('http://i.waimai.meituan.com/ajax/v6/poi/info?_token=' + token),
  //     params: {
  //       wmpoiid: id,
  //       uuid: "NxAlVM4plX_ixoEsoR4KJSuHBLo944rRZK5hwXfdReHfnuBqqar92I-K5PvFYuvi",
  //       platform: '3',
  //       partner: '4',
  //       userid: '280770501',
  //       xforwith: window.xforwith
  //     }
  //   }
  // });
  let resp = await axios({
    method: 'get',
    url: './json/restanurant.json',
  }
  )
  dispatch({
    type: RESTANURANT_DATA,
    obj: resp.data
  });
}