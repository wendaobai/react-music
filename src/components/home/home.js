import React from 'react';
import './home.less';

import {Button, Icon, SearchBar} from 'antd-mobile';
class Home extends React.Component {
    render() {
        return (
            <div className="wrap-home">
                <div className="header">
                    <div className="top-bar">
                        <div className="userinfo">
                            <i className="iconfont icon-zhankai"></i>
                        </div>
                        <div className="title">
                            <a href="" className="item-my">我的</a>
                            <a href="" className="item-music">音乐馆</a>
                            <a href="">发现</a>
                        </div>
                        <div className="more">
                            <i className="iconfont icon-jia"></i>
                        </div>
                    </div>
                    <div className="search-bar">
                        <SearchBar placeholder="Search" maxLength={8} />
                    </div>

                </div>
                <div className="main">
                    <h2>main......11111111111111</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......</h2>
                    <h2>main......22222222222222222222</h2>
                </div>
                <div className="footer">
                    footer....
                </div>
            </div>
        )
    }
}

export default Home;