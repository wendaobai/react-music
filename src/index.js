import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import Store from './redux/store';
import RouterBasic from './routers/index'
import '@/static/js/flexible_css.debug.js'
import '@/static/js/flexible.debug.js'
import 'antd-mobile/dist/antd-mobile.css';
import '@/static/style/common.less';
import '@/static/iconfont/iconfont.css';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={Store}>
    <RouterBasic></RouterBasic>
</Provider>, document.getElementById('root'));
// registerServiceWorker();
