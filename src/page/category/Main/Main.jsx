import React from 'react';
import 'component/common.scss';

import { connect } from 'react-redux';
import NavHeader from 'component/NavHeader/NavHeader.jsx'
import Header from '../Header/Header.jsx'
import ContentList from '../ContentList/ContentList.jsx'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="category">
                <NavHeader title="分类" />
                <Header />
                <ContentList />
            </div>
        )
    }
}

export default connect(
)(Main);