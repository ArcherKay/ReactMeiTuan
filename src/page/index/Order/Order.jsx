import './Order.scss';
import React from 'react';

import { connect } from 'react-redux';
import { getOrderData } from '../actions/orderAction.js';
import ListItem from './ListItem.jsx';
import ScrollView from 'component/ScrollView/ScrollView.jsx'



/**
 * @constructor <Order>
 * @description 订单tab代码
 */

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.fetchData(this.page);
        //标识页面是否可以滚动
        this.state = {
            isend: false
        }

    }
    onLoadPage() {
        this.page++
        // 最多滚动3页3次
        if (this.page > 3) {
            this.setState({
                isend: true
            })
        }
        else {
            this.fetchData(this.page);
        }
    }
    fetchData(page) {
        this.props.dispatch(getOrderData(page));
    }
    renderList() {
        let list = this.props.list;

        return list.map((item, index) => {
            return <ListItem key={index} itemData={item} ></ListItem>
        })
    }
    render() {
        return (
            <div className="order">
                <div className="header">订单</div>
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    <div className="order-list">{this.renderList()}</div>
                </ScrollView>
            </div>
        );
    }
}
export default connect(
    state => ({
        list: state.orderReducer.list
    })
)(Order);