import './Home.scss';
import React from 'react';

import Header from './Header/Header.jsx'
import Category from './Category/Category.jsx'
import ContentList from './ContentList/ContentList.jsx'


/**
 * @constructor <Home>
 * @description 首页tab代码
 */

export default class Home extends React.Component { 
  
    render(){
        return (
            <div >
                <Header/>
                <Category/>
                <ContentList/>
            </div>
        );
    }
}