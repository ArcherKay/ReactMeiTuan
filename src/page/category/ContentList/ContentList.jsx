import './ContentList.scss';
import React from 'react';

import { getListData } from '../actions/contentListAction';
import { connect } from 'react-redux';
import ScrollView from 'component/ScrollView/ScrollView.jsx'
import ListItem from 'component/ListItem/ListItem.jsx'

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
        this.fetchData();


        //标识页面是否可以滚动
        this.state = {
            isend: false
        }

    }
    onLoadPage() {
        this.page++
            // 最多滚动3页3次
            if (this.props.page <= 3) {
                this.fetchData();
            }
          
    }

    fetchData() {
        this.props.dispatch(getListData({}));
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
               
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.props.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
        );
    }
}
export default connect(
    state => ({
        list: state.contentListReducer.list,
        page: state.contentListReducer.page,
        isend: state.contentListReducer.isend

    })
)(ContentList);