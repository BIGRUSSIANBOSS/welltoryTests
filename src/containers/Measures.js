/**
 * Created by sasha on 16.08.16.
 */
import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Layout from './Layout';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger())
);

export default class Measures extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </div>
        );
    }
}