/**
 * Created by sasha on 16.08.16.
 */
import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import LoginForm from './LoginForm';
import * as reducers from '../reducers';


const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger())
);

export default class Login extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            </div>
        );
    }
}