import './ContentList.scss';
import React from 'react';

import { getListData } from '../../actions/contentListAction.js';
import { connect } from 'react-redux';
import ListItem from "component/ListItem/ListItem.jsx";
import ScrollView from 'component/ScrollView/ScrollView.jsx'

/**
 * @constructor <ContentList>
 * @description 附近商家列表
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        // 记录当前页码

        this.page = 0;

        //请求第一屏数据
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
        this.props.dispatch(getListData(page));
    }
    renderItems() {
        let list = this.props.list;
        return list.map((item, index) => {
            return <ListItem key={index} itemData={item}>{item.name}</ListItem>
        })
    }
    
    render() {
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span >附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
        );
    }
}
export default connect(
    state => ({
        list: state.contentListReducer.list
    })
)(ContentList);