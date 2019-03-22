import './Loading.scss';
import React from 'react';

 class Loading extends React.Component{
    render(){
        let str='加载中';
        if(this.props.isend)
        {
            str='已完成';
        }
        return <div className="loading">{str}</div>
    }
}
export default Loading;