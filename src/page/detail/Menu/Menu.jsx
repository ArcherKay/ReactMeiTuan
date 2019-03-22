import React from 'react';

import { connect } from 'react-redux';
import '../Menu/Menu.scss';
import { getListData, itemClick } from '../actions/menuAction.js';
import MenuItem from './MenuItem/MenuItem.jsx';
import ShopBar from './ShopBar/ShopBar.jsx';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getListData());
    }
    /**
   * 点击切换右边数据
   */
    itemClick(index) {
        this.props.dispatch(itemClick({
            currentLeftIndex: index
        }));

    }
    /**
     * 渲染左边的列表
     */
    renderLeft() {
        let listData = this.props.listData.food_spu_tags || [];
        return listData.map((item, index) => {
            let cls =this.props.currentLeftIndex===index? 'left-item active': 'left-item';
            return (
                <div onClick={() => this.itemClick(index)} className={cls} key={index}>
                    <div className="item-text">{item.icon ? <img className="item-icon" src={item.icon} /> : null}{item.name}</div>
                </div>
            )
        })
    }
    renderRight() {
        let index = this.props.currentLeftIndex;
        let array = this.props.listData.food_spu_tags || [];
        let currentItem = array[index];

        if (currentItem) {
            let title = <p key={1} className="right-title">{currentItem.name}</p>
            return [
                title,
                <div key={2} className="right-list"><div className="right-list-inner">{this.renderRightList(currentItem.spus)}</div></div>
            ]
        }
        else {
            return null;
        }
    }
    renderRightList(array) {
        let _array = array || [];
        return _array.map((item, index) => {
            if(!item.chooseCount)
            {
                item.chooseCount=0;
            }
            return <MenuItem key={index} _index={index} data={item}></MenuItem>
        });
    }
    render() {

        return (
            <div className="menu-inner">
                <div className="left-bar">
                    <div className="left-bar-innner">
                        {this.renderLeft()}
                    </div>
                </div>
                <div className="right-content">
                    {this.renderRight()}
                </div>
                <ShopBar/>
            </div>
        )
    }
}

export default connect(
    state => ({
        listData: state.menuReducer.listData,
        currentLeftIndex: state.menuReducer.currentLeftIndex
    })
)(Menu);