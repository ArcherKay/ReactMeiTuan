import React from 'react';
import './Main.scss';
import NavHeader from 'component/NavHeader/NavHeader.jsx'
import 'component/common.scss';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.maxCount = 140;
        this.chineseInputing=false;
        this.state = {
            //还剩多少字符可以输入
            count: this.maxCount,
            //当前用户点击的是第几颗星星
            startIndex: 0
        }
    }

    /**
     * 渲染评分用的小星星
     */
    renderStar() {
        let array = [];
        for (let i = 0; i < 5; i++) {
            let cls =i>=this.state.startIndex? "star-item":"star-item light";
            array.push(<div onClick={() => { this.doEva(i) }} key={i} className={cls}></div>)
        }
        return array;
    }
    /**
     * 
     * 点击评分 
     */
    doEva(i) {
        this.setState({
            startIndex:  i+1
        });
    }
     /*
     * 用户输入回调 
     */
    onInput(value){
        let num=value.length;
        if(!this.chineseInputing){
            this.setState({
                count:  this.maxCount-num
            });
        }
      
    }
    componentDidMount(){
        // compositionstart 事件触发于一段文字的输入之前,该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词
        this.commentInput.addEventListener('compositionstart',()=>{
            this.chineseInputing=true;
        });
        this.commentInput.addEventListener('compositionend',(e)=>{
            this.chineseInputing=false;
            this.onInput(e.target.value)
        });
    }
    
    render() {
        return (
            <div className="content">
                <NavHeader title="评价" />
                <div className="eva-content">
                    <div className="star-area">
                        {this.renderStar()}
                    </div>
                    <div className="comment">
                        <textarea ref={(ref)=>this.commentInput=ref} onChange={(e)=>this.onInput(e.target.value)} className="comment-input" placeholder="亲，菜品的口味如何，商家的服务是否周到?"></textarea>
                        <span className="count">{this.state.count}</span>
                    </div>
                    <p className="one-line product-name" >+本分冒菜。麻辣鲜香，中辣微微麻</p>
                </div>
                <div className="submit">提交评价</div>
            </div>
        )
    }
}
export default Main;
