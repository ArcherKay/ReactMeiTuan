import React from 'react';

import { connect } from 'react-redux';
import CommentItem from './CommentItem/CommentItem.jsx';
import ScrollView from 'component/ScrollView/ScrollView.jsx'
import { getListData } from '../../actions/commentAction.js';

class CommentList extends React.Component {
    onLoadPage() {
        this.props.dispatch(getListData({}));
          
    }
    renderList() {
        let list = this.props.commentList;
        return list.map((item, index) => {
            return (
                <CommentItem key={index} data={item}></CommentItem>
            )
        })
    }
    render() {
        return (
            <div className="comment-list">
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={0}>
                    {this.renderList()}
                </ScrollView>
            </div>
        )
    }
}

export default connect(
    state => ({
        commentList: state.commentReducer.commentList
    })
)(CommentList);