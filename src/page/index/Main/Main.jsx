import 'component/common.scss';

import React from 'react';

import { connect } from 'react-redux';

import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home.jsx';
import 'component/common.scss';


import Loading from './Loading.jsx';

const Order = Loadable({
    loader: () => import(/* webpackChunkName: "order" */'../Order/Order'),
    loading: Loading,
});

const My = Loadable({
    loader: () => import(/* webpackChunkName: "my" */'../My/My'),
    loading: Loading,
});

class Main extends React.Component {
    constructor(props) {
        super(props);

    }
    // loadMy(location, cb){
    //     import(/* webpackChunkName: "my" */'../My/My').then((component)=>{
    //         cb(null, component.default);
    //     });
    // }
    render(){

        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        );
    }
}

export default withRouter(connect(
    // state =>({
        
    // })
)(Main));