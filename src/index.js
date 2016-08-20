import React from 'react';
import ReactDOM from 'react-dom'
import Login from './containers/Login';
import Measures from './containers/Measures';
import NoMatch from './containers/NoMatch';
import { Router, Route, browserHistory } from 'react-router';

import cookie from 'react-cookie';

// cookie.remove('csrftoken');
// cookie.remove('sessionid');
ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/measures" component={Measures}/>
    <Route path="*" component={NoMatch}/>
    </Router>
), document.getElementById('root'));