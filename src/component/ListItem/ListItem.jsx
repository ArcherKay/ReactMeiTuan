import './ListItem.scss';
import React from 'react';

import { connect } from 'react-redux';
import StarScore from 'component/StarScore/StarScore.jsx'


/**
 * @constructor <ListItem>
 * @description 列表单个组件
 */

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }


    /**
     * @description 渲染是否是新到和品牌标签
     */
    renderBrand(data) {
        if (data.brand_type) {
            return <div className="brand brand-pin">品牌</div>
        }
        else {
            return <div className="brand brand-xin">新到</div>
        }

    }

    /**
    * @description 渲染月售数量
    */
    renderMonthNum(data) {
        let num = data.month_sale_num;
        if (num > 999) {
            return '999+'
        }
        return num;
    }
    /**
  * @description 渲染美团专送
  */
    renderMeituanFlag(data) {
        if (data.delivery_type) {
            return <div className="item-meituan-flag">美团专送</div>;
        }
        else {
            return null;
        }

    }
    renderOther(data) {
        let Array = data.discounts2;
        return Array.map((item, index) => {
            return (
                <div key={index} className="other-info">
                    <img src={item.icon_url} className="other-tag" />
                    <div className="other-content">{item.info}</div>
                </div>)
        })
    }
    render() {
        let data = this.props.itemData;
        return (
            <div className="r-item-content scale-1px">
                <img src={data.pic_url} className="item-img" />
                {this.renderBrand(data)}
                <div className="item-info-content">
                    <p className="item-title">{data.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score"><StarScore score={data.wm_poi_score} /></div>
                        <div className="item-count">月售{this.renderMonthNum(data)}</div>
                        <div className="item-distance">&nbsp;{data.distance}</div>
                        <div className="item-time">{data.mt_delivery_time}&nbsp;|</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">{data.min_price_tip}</div>
                        {this.renderMeituanFlag(data)}
                    </div>
                    <div className="item-other">
                        {this.renderOther(data)}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(

)(ListItem);