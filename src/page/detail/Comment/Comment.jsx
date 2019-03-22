import React from 'react';

import { connect } from 'react-redux';
import './Comment.scss';
import StarScore from 'component/StarScore/StarScore.jsx';
import {getListData} from '../actions/commentAction.js';
import CommentList from './CommentList/CommentList.jsx';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
       
    }
    fetchData(){
        this.props.dispatch(getListData())
    }
    render() {
       let data=this.props.commentData;
        return (
            <div className="comment-inner">
                <div className="comment-score">
                    <div className="mail-score-content">
                        <div className="mail-score">{data.comment_score}</div>
                        <div className="mail-text">商家评价</div>
                    </div>
                    <div className="other-score-content">
                        <div className="taste-score">
                            <div className="taste-text">口味</div>
                            <div className="taste-star-wrap"><StarScore score={data.food_score}/></div>
                            <div className="taste-score-text">{data.food_score}</div>
                        </div>
                        <div className="package-score">
                            <div className="package-text">包裝</div>
                            <div className="package-star-wrap"><StarScore score={data.pack_score}/></div>
                            <div className="package-score-text">{data.pack_score}</div>
                        </div>
                    </div>
                    <div className="send-score-content">
                        <div className="send-score">{data.delivery_score}</div>
                        <div className="send-text">商家评价</div>
                    </div>
                </div>
                <CommentList/>
            </div>
        
        )
    }
}

export default connect(
    state => ({
        commentData: state.commentReducer.commentData
    })
)(Comment);