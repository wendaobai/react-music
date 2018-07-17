
import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Test from '@/components/test';
import Home from '@/containers/home/Home.js';


class RouterBasic extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect path={'/'} exact to={'/test'}></Redirect>
                    <Route path={'/test'} component={Test} exact></Route>
                    <Route path={'/Home'} component={Home} exact></Route>
                </Switch>
            </Router>
        )
    }   
}


export default RouterBasic;